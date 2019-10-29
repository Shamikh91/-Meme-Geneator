import React from 'react'
import ReactDOM from 'react-dom'

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        

    }

    handleChange(event){
        const{name, value} = event.target
        this.setState({[name]:value})

    }
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length) // this will get an an radom no. from the array // . floor is that it round offs decimel part to the no., i.e 2.99 to 2. .Ceil is used vice versa i.e. 4.2 to 5.
        /* 
        above code is a JS code to delect random no, main command is Maths.random. 
        Math.floor is done to prevent decimals in this case and * defines the range, 
        like the no.chosen will be between 0 and the no. mentioned after *. */
         const randMemeImg = this.state.allMemeImgs[randNum].url                   // this will extract the image from that no.
        this.setState({ randomImg: randMemeImg })                                 // this will update the randomImg in the state
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                 this.setState({ allMemeImgs: memes })
            })
    }
    render(){
        return(
                <div>
                     <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                </div>
        )
    }
}

export default MemeGenerator
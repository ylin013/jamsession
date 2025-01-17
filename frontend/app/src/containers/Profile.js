
import React,{Component} from "react";
import "./Profile.css";
import Amplify, {Auth,API, graphqlOperation} from 'aws-amplify';
import { Row, Col, Image, ListGroup, ListGroupItem, Table,Button,Modal,InputGroup,FormControl} from 'react-bootstrap';
import {listSongs} from "../graphql/Queries";
import {createSongs} from "../graphql/Mutations";
import JammerHistory from "./JammerHistory";

//TODO: Need to pull this data from DB

export default class Profile extends Component {
    
    constructor(props) {
      
      super(props);
      this.state =
      {
       username:'',
       email:'',
       show:false,
       song_name:'',
       song_type:'public',
       song_collaborators:'',
       song_exists:false,
  
       }
       this.handleName=this.handleName.bind(this);
       this.handleType=this.handleType.bind(this);
       this.handleCollab=this.handleCollab.bind(this);
       this.handleCreateSong=this.handleCreateSong.bind(this);
      
    }
    
    componentDidMount(){
        const user = Auth.currentUserInfo();
         
        user.then(function(result) {
            this.setState({username:result.username})
            this.setState({email:result.attributes.email})
            }.bind(this));
    }
    
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});
    
    handleName(event){
        this.setState({song_name: event.target.value});
    }

    handleType(event){
        this.setState({song_type: event.target.value});
    }

    handleCollab(event){
        this.setState({song_collaborators: event.target.value});
    }
    handleCreateSong(){
        
        // TODO: Write these info to the DB
        //console.log(this.state.song_name);
        //console.log(this.state.song_type);
        //console.log(this.state.song_collaborators);
        if(!this.state.song_exists)
        {
            this.props.history.push(`/coder/${this.state.song_name}`);
        }
        else{
            //throw error saying this song already exists and open the new song
        }
    
    }
   
    render(){
        
     return(
        <div className="container">
            <Row>
            <Col s={6} md={4}>
            <Image src='https://image-ticketfly.imgix.net/00/00/32/50/75-og.jpg?w=500&h=334&fit=crop&crop=top' thumbnail />

                
            </Col>
                
                    
                <Col s={6} md={4}>
                <JammerInfo 
                    username={this.state.username}
                    email={this.state.email}
                />
                
                </Col>

            </Row>
            <Row>
            <JammerHistory/>
            </Row>
    </div>
    )
     }


}

const JammerInfo = (props) => (
    <div className="JammerInfo" >
                    
         <ListGroup>
             <ListGroupItem><h2>Jammer Name :</h2><br/>{props.username}</ListGroupItem>
             <ListGroupItem><h2>Jammer Email :</h2><br/> {props.email}</ListGroupItem>
         </ListGroup>    
    </div>
)


import React,{Component} from "react";
import "./Profile.css";
import Amplify, {Auth,API, graphqlOperation} from 'aws-amplify';
import { Row, Col, Image, ListGroup, ListGroupItem, Table,Button,Modal,InputGroup,FormControl} from 'react-bootstrap';
import {listSongs} from "../graphql/Queries";
import {createSongs} from "../graphql/Mutations";

class JammerHistory extends Component {
    state = { title: '', songs: [] }
    async componentDidMount() {
        try {
            const apiData = await API.graphql(graphqlOperation(listSongs));
            const songs = apiData.data.listSongs.items;
            this.setState({ songs });
        } catch (err) {
            console.log('error: ', err);
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    createSongs = async () => {
        const { title } = this.state;
        if (title === '') return
        try {
            const song = { title }
            const songs = [...this.state.songs, song]
            this.setState({ songs, title: ''})
            await API.graphql(graphqlOperation(createSongs, { input: song }))
            console.log('song successfully created!');
            //this.props.history.push(`/coder/${this.state.title}`);
        } catch (err) {
            console.log('error: ', err);
        }
    }
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });
    render() {
        
        return (
            
            <div className="JammerHistory">
               
                    <div>
                    <Row>    
                    <Col s={6} md={4}>
                        <Button variant="primary" onClick={this.handleShow} bsSize="large" block bsStyle="danger">
                            Create Song
                            </Button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Let's Create a new Song</Modal.Title>
                            </Modal.Header>
                            <form className="container">

                                <h3>Song Name</h3>
                                <InputGroup >
                                    <FormControl
                                        name='title'
                                        placeholder="Please Enter the Song Name"
                                        onChange={this.onChange}
                                        value={this.state.title}
                                    />

                                </InputGroup >
                                <InputGroup >
                                    <h3>Private/ Public</h3>
                                    <FormControl
                                        placeholder="Enter Private or Public"
                                        value={this.state.song_type}
                                        onChange={this.handleType}

                                    />

                                </InputGroup >
                                <InputGroup >
                                    <h3>Add Collaborators</h3>
                                    <FormControl
                                        placeholder="Add Collaborators separating by comma"
                                        value={this.state.song_collaborators}
                                        onChange={this.handleCollab}
                                    />

                                </InputGroup >

                            </form>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.createSongs}>
                                    Create a New Song
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>  
                    </Row>
                    </div>

                
                <div>
                <h2>Jammer History</h2>
                <Table striped bordered responsive  >
                    <thead>
                        <tr>

                            <td>Song Name</td>
                            <td>Privacy</td>
                            <td>Jammers</td>


                        </tr>
                    </thead>
                   
                    {
                        this.state.songs.map((rest, i) => (
                            <tbody key={i}>
                                <tr>
                                    <td><a href={"/coder/"+this.state.songs.title}>{rest.title}</a></td>
                                    <td>Privacy</td>
                                    <td>Jammers</td>
                                </tr>
                            </tbody>
                        ))
                    }

                </Table>
            </div>
            </div>)        
        
    }
}
export default JammerHistory;
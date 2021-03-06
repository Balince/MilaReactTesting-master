import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron/";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid/";
import { List, ListItem } from "../components/List/";
import { Input, FormBtn } from "../components/Form";
import SearchBtn from "../components/SearchBtn";
import UserCaptionCreator from "../components/UserCaptionCreator";
import UserEditCaptions from "../components/UserEditCaptions";
import UserEditModal from "../components/UserEditModal";
import UserRequestCreator from "../components/UserRequestCreator";
import UserRequestViewer from "../components/UserRequestViewer";
import UserSearchOptions from "../components/UserSearchOptions";
import SideNavPage from "../components/SideNavPage";
import UserSuggestionBox from "../components/UserSuggestionBox"


class UserDash extends Component {

    state = {
        captions: [],
        showCaptionCreator: false,
        showCaptionEditor: false,
        showRequestCreator: false,
        showRequestViewer: false,
        showUserSearchOptions: false,
        showSuggestionBox: false,
        categories: [],
        captions: [],
    };

    componentDidMount() {
        console.log("loaded user Dashboard page");
        var username = "testuser"
        this.gatherCategories();
        this.importCaptions(username);
    };

    gatherCategories = () => {
        API.getCategories()
            .then(res => 
                this.setState({
                    categories: res.data
                }))
    };

    importCaptions = (user) => {
        API.getUserCaptions(user)
            .then(res => 
                this.setState({
                    captions: res.data
                })
                )

    };

    onClickCaption = () => {
        if (this.state.showCaptionCreator === false ) {
            this.setState({
                showCaptionCreator: true,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showSuggestionBox: false
            }) 
        } else {
            this.setState({
                showCaptionCreator: false
            })
        }
    };

    onClickEditCaption = () => {
        if (this.state.showCaptionEditor === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: true,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showSuggestionBox: false
            })
        } else {
            this.setState({
                showCaptionEditor: false
            })
        }
    };

    onClickUserRequest = () => {
        if (this.state.showRequestCreator === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: true,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showSuggestionBox: false
            })
        } else {
            this.setState({
                showRequestCreator: false
            })
        }

    }   

    onClickViewRequest = () => {
        if (this.state.showRequestViewer === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: true,
                showSuggestionBox: false,
                showUserSearchOptions: false,
            })
        } else {
            this.setState({
                showRequestViewer: false
            })
        }

    }   

    onClickSearchOptions = () => {
        if (this.state.showUserSearchOptions === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: true,
                showSuggestionBox: false
            })
        } else {
            this.setState({
                showUserSearchOptions: false
            })
        }

    }   

    onClickSuggestionBox = () => {
        if (this.state.showSuggestionBox === false) {
            this.setState({
                showCaptionCreator: false,
                showCaptionEditor: false,
                showRequestCreator: false,
                showRequestViewer: false,
                showUserSearchOptions: false,
                showSuggestionBox: true
            })
        } else {
            this.setState({
                showSuggestionBox: false
            })
        }

    }   
    

    render() {
        return (
            <div>
            <SideNavPage createOption={this.onClickCaption} editOption={this.onClickEditCaption} suggestionOption={this.onClickSuggestionBox} requestOption={this.onClickUserRequest} searchOption={this.onClickSearchOptions} viewrequestsOption={this.onClickViewRequest}/>
            <Container fluid>
                <Row>
                    <Col size="md-3"/>
                    <Col size="col-sm-6">
                        <Jumbotron>
                            <h1 className="text-dark display-4"><strong>User Dashboard</strong></h1>
                            <p className="lead"><strong></strong></p>
                        </Jumbotron>
                        {/* <input type="submit" value="Create Community Caption" onClick={this.onClickCaption} /> */}
                        <div>
                            {this.state.showCaptionCreator ? <UserCaptionCreator categories={this.state.categories} captions={this.state.captions}  /> : null }
                        </div>
                        {/* <input type="submit" value="View/Edit Your Community Captions" onClick={this.onClickEditCaption} /> */}
                        <div>
                            {this.state.showCaptionEditor ? <UserEditCaptions categories={this.state.categories} captions={this.state.captions}  /> : null }
                        </div>
                        {/* <input type="submit" value="Request a Caption for an Image" onClick={this.onClickUserRequest} /> */}
                        <div>
                            {this.state.showRequestCreator ? <UserRequestCreator categories={this.state.categories}  /> : null }
                        </div>
                        {/* <input type="submit" value="Review Regional Caption Requests" onClick={this.onClickViewRequest} /> */}
                        <div>
                            {this.state.showRequestViewer ? <UserRequestViewer categories={this.state.categories} /> : null }
                        </div>
                        {/* <input type="submit" value="Search for Captions" onClick={this.onClickSearchOptions} /> */}
                        <div>
                            {this.state.showUserSearchOptions ? <UserSearchOptions categories={this.state.categories} /> : null }
                        </div>
                        <div>
                            {this.state.showSuggestionBox ? <UserSuggestionBox categories={this.state.categories}  /> : null }
                        </div>
                    </Col>
                    <Col size="md-3"/>
                </Row>
            </Container>
            </div>
        )
    }
}

export default UserDash;







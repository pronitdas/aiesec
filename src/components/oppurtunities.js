import React, { Component } from 'react';
import '../App.css';
import {Card, CardHeader, CardText, RaisedButton, Toggle} from "material-ui";

const views = ["overview", "prereq", "visa", "ld", "ro"];

export class Oppurtunity extends Component {


    changeView = (num) => {

        console.log(views[num]);
    };


    render() {
        return (
            <div id="main" className="row p-t-10">
                <div id="general" className="col-sm-8">
                    <RaisedButton label="Overview" onClick={this.changeView(0)} />
                    <RaisedButton label="Pre-Requisites" onClick={this.changeView(1)} />
                    <RaisedButton label="Visa And Logistics" onClick={this.changeView(2)} />
                    <RaisedButton label="LeaderShip And Development" onClick={this.changeView(3)}/>
                    <RaisedButton label="Related Oppurtunities" onClick={this.changeView(4)}/>
                </div>
                <div id="sidebar" className="col-sm-4">
                    <Card expanded={true}>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar="images/ok-128.jpg"
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText>
                            <Toggle
                                toggled={true}
                                labelPosition="right"
                                label="This toggle controls the expanded state of the component."
                            />
                        </CardText>
                    </Card>
                </div>

            </div>
        );
    }
}


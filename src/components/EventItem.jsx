import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";

import axios from "axios";

class EventItem extends Component {
   handleDelete = () => {
      console.log(this.props.id);
      axios.delete("/api/events/delete/" + this.props.id, {
         headers: {
            Authorization: "Token " + localStorage.getItem("token"),
         },
      });
      window.location.reload(false);
   };
   render() {
      return (
         <Jumbotron>
            <ul key={this.props.id}>
               <li> Name: {this.props.name} </li>
               <li> Audience: {this.props.audience} </li>
               <li> DateTime: {this.props.datetime} </li>
               <li> Venue: {this.props.venue} </li>
               <li> Creator: {this.props.creator} </li>
               <li> State: {this.props.state}</li>
            </ul>
            <Button type="button" onClick={this.handleDelete}>
               DELETE
            </Button>
         </Jumbotron>
      );
   }
}

export default EventItem;

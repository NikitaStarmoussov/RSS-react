import CardProps from "./card-props"
import React from "react"
export class Card extends React.Component<CardProps> {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}
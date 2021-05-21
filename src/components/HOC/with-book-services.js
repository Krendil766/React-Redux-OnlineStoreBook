import React from "react";
import { BookConsumer } from "../Context";

const withBookServices = () => (Wrapped) => {
    return (props) => {
        return (
            <BookConsumer>
                {
                    (services) => {
                        return (
                            <Wrapped {...props} services={services} />
                        )
                    }
                }
            </BookConsumer>
        )
    }
}

export default withBookServices
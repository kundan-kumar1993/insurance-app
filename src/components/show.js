import { Component } from "react";
import firebase from "../firebase";

class Show extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('insurance_providers');
        this.unsubscribe = null;
        this.state = {
            insurance_providers: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const insurance_providers = [];
        querySnapshot.forEach((doc) => {
            const {name, organizationnumber} = doc.data();
            insurance_providers.push({
                key: doc.id,
                doc,
                name,
                organizationnumber
            });
        });
        this.setState({
            insurance_providers
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

}
export default Show;
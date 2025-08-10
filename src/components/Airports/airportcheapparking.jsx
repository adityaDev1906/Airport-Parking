import React from 'react';
import VehicleDetails from './VehicleDetails';
import ContactDetails from './ContactDetails';
import PaymentCard from './Paymentcard';
import PaymentCardheader from './Paymentcardheader';
import Ordersummery from './Ordersummery';


const Airportcheapparking = () => {
    return (
        <div>
            <PaymentCardheader />
            <ContactDetails />
            <PaymentCard />
            
        </div>
    );
}

export default Airportcheapparking;

import PriceOption from "./PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOption =[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to cardio equipment",
            "Access to weight training area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "Access to all gym equipment",
            "Unlimited group fitness classes",
            "Access to sauna and steam room",
            "Personalized workout plans"
          ]
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "price": 79.99,
          "features": [
            "Priority access to equipment",
            "Free towel service",
            "Complimentary personal training session per month",
            "Access to exclusive VIP lounge"
          ]
        }
      ]
      

    return (
        <div className="m-12" >
            <h2 className="text-2xl">Best prices in the town</h2>
           <div className="grid grid-cols-3 gap-6">
           {
                priceOption.map(option =><PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
           
        </div>
    );
};

export default PriceOptions;
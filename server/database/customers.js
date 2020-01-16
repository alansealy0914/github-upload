var customers = [
        {
            id: 1,
            fullName: "American Airlines",
            address1: "123 Main Street",
            address2: null,
            //customerId: 100,
            city: "Chicago",
            state: "IL",
            zip: "32819",
            getsDiscount: true,
            discount: {
                discountId: 1,
                discountPercent: 10,
                discountName: "Employee"
            } 
        },
        {
            id: 2,
            fullName: "Sally Sparrow",
            address1: "456 Wallaby Way",
            address2: "Apt 23",
            //customerId: 200,
            city: "Orlando",
            state: "FL",
            zip: "32802",
            getsDiscount: false,
            discount: null 
        },
        {
            id: 3,
            fullName: "Bolokada Conde",
            address1: "255 McFarland Drive",
            address2: null,
            //customerId: 300,
            city: "Portland",
            state: "OR",
            zip: "97204",
            getsDiscount: true,
            discount: {
                discountId: 2,
                discountPercent: 5,
                discountName: "Friends & Family"
            } 
        }
        
    ];

module.exports = customers;
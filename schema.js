const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    scalar Date

    type User {
        id: ID!
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!
    }

    type Listing {
        id: ID!
        listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username: String!
    }

    type Booking {
        id: ID!
        listing_id: String!
        booking_id: String!
        booking_date: Date!
        booking_start: Date!
        booking_end: Date!
        username: String!
    }

    type Auth {
        secret: String
    }

    type Query {
        searchListingByName(listing_title: String!) : [Listing]
        searchListingByCity(city: String!) : [Listing]
        searchListingByPostalCode(postal_code: String!) : [Listing]

        getListings: [Listing]

        login(username: String!, password: String!) : Auth
        
        getAllUserBooking(username: String, secret: String!) : [Booking]
        getAllAdminListings(secret: String!) : [Listing]
    
    }

    type Mutation {
        createUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!
        ) : User

        createListing(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!
            secret: String!
        ) : Listing

        createBooking(
            listing_id: String!
            booking_id: String!
            booking_start: Date!
            booking_end: Date!
            username: String!
            secret: String!
        ) : Booking

    }
`
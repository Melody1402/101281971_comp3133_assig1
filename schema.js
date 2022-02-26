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
        getListings: [Listing]
        searchListingByName(name: String!): [Listing]
        searchListingByCity(city: String!): [Listing]
        searchListingByPostalCode(postal_code: String!): [Listing]
        getAllBookingsByUser(userId: String!): [Booking]
        getAllListingsByAdmin(userId: String!): [Listing]
    }
    type Mutation {
        createUser(
            username: String!
            firstname: String!
            lastname: String!
            password: String!
            email: String!
            type: String!): User
        
        login(username: String!
            password: String!): ID    

        createListing(
            listing_id: String!
            listing_title: String!
            description: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            username: String!): Listing

        createBooking(
            listing_id: String!
            booking_id: String!
            booking_date: Date!
            booking_start: Date!
            booking_end: Date!
            username: String!): Booking
    }
`
# Project REST-Rant

REST-Rant is an app where users can review restaurants.

# Tech Usage
**CSS Framework**: Bootstrap
**Stack**: MongoDB, Express, NodeJS
**Server-Side Rendering**: JSX
**Node Modules**: method-override, dotenv, express-react-views


# Routes
| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Home Page|
| GET | /places | Places index page|
| POST | /places | Create new place |
| GET | /places/new | Form page for creating a new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /paces:id | Delete a particular place |
| POST | /places/:id/rant | Create a rant(comment) about a particularr place |
| DELETE | /places/:id/rant/:rantid | Delete a rant(comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

# User Stories

As a person who often eats out I need an easy way to read reviews of restaurants so I can decide where to eat.

# Database

## Places
| Field | Type |
| ----- | ---- |
| _id | Object ID |
| Name | String |
| City | String |
| State | String |
| Cuisines | String |
| Pic | String |

## Rants
| Field | Type |
| ----- | ---- |
| -id | Object ID |
| place_id | ref(places) Object_id |
| rant | Boolean |
| rating | Number |
| comment | String |
| reviewer | String |

# Planning
## User Stories
TBD
## Wireframes
TBD
# Notes
Possible bonus ideas:
* Update for comments
* Aggregate rating for a place
* Auto-complete state dropdown
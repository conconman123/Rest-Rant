# Project REST-Rant

REST-Rant is an app where users can review restaurants.



# A Routes
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

# A user Stories

As a perso who often eats out I need an easy way to read reviews of restaurants so I can decide where to eat.

# A Places

| Name | String |
| City | String |
| State | String |
| Cuisines | String |
| Pic | String |
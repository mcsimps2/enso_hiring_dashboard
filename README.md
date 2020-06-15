# EnsoData React Takehome Project

## Overview
For this project, you will be creating a reusable pagination component in React.  This pagination component will consume from a mock API to display a requested subset of items (a "page") to the end user.

There are three variants of pagination that are commonly used:
1.  **Numbered pagination:** This type of paginator provides the traditional "1, 2, 3, … 10" pagination bar.  Sometimes, "forward" and "backward" buttons are also provided to move to adjacent pages.  [Video Demonstration](https://youtu.be/onTfZ76_3xg).
2.  **Step Pagination:** This paginator only provides "forward" and "backward" buttons to allow users to switch between pages.  The user can only move to adjacent pages.  [Video Demonstration](https://youtu.be/7bL8cH_AKB8).
3.  **Infinite Scroll Pagination:**  This is the type of pagination used by messaging apps like Facebook Messenger, WhatsApp, iMessages, etc…  Once the user scrolls to the boundary of a view, the next page of items is loaded.  What’s unique about this type of pagination is that older pages remain rendered.  [Video Demonstration](https://youtu.be/x06K-endYW0).

We will be using these three pagination variants to paginate three resources used across the EnsoData codebase:
 - **Patients:** These represent a patient who underwent a sleep study at a clinic.  The following fields are available on the patient object: `firstName`, `lastName`, `studyDate` (the date when the sleep study was performed), and `studyType` (the type of sleep study performed).
 - **Clinics:** These are the clinics that use EnsoData’s product.  The clinic object only has the field `name`.
 - **Users:** These are the user accounts from clinic personnel registered with EnsoData.  The user object has the fields `firstName`, `lastName`, `email`, and `role`.
 
## Getting Started
To get started, first clone the GitHub repository available at https://github.com/mcsimps2/enso_hiring_dashboard

Please take care not to fork the repository since GitHub does not allow the creation of private forks for public repositories.  If you fork the repository, your solution will end up publicly available online, which would spoil the fun for other developers!  You may submit your solution to us as a .zip file or by adding us to your private repo.  If you choose the latter, add `mcsimps2` as a collaborater.

Go ahead and start the React app you cloned earlier with `yarn install` followed by `yarn start`.  You should see the following page:
![Overview Screenshot](/docs/images/Overview%20Screenshot.png?raw=true)

Depending which tab in the topbar you select, this "overview" page will list the first 10 clinics, users, or patients pulled from the mock database located in the file `dataset.js`.

There are actually a lot more items than the first 10 shown.  For this reason, the goal of the project is to paginate these resources as follows:
 - **Patients:** The patients list should be paginated using "Numbered Pagination."
 - **Clinics:** The clinics list should be paginated using "Step Pagination."
 - **Users:** The users list should be paginated with "Infinite Scrolling" pagination.  In this case, once the user scrolls to the bottom of the screen, the next page of users should be loaded and rendered below the current list of users.
 
The resources are already pre-sorted in the mock database, so you do not need to worry about sort order when you consume them.  However, for reference, these are
 - **Patients:** sorted by study date descending.
 - **Clinics:** sorted by name ascending.
 - **Users:** sorted by last name ascending.
 
You may also assume we know the total count of each resource beforehand.  In production, these are actually returned with each pagination request, but for simplicity, you may use the constants defined in the `api` module.

## What’s Provided
In the `api` folder, you will find methods to access the patient, clinic, and user resources as if they were being consumed from an actual API.  They are actually just pulling from the mock database but using `setTimeout` to simulate an actual, asynchronous API call.  You can provide two parameters, `skip` and `limit`, to paginate the response.

In `components/pages/Overview`, you will find the "Overview" page displayed in the screenshot above, as well as an assortment of components that you can use to display each resource.  You can render a resource using `PatientCard`, `ClinicCard`, and `UserCard`.  For example,
```
<UserCard user={userObjectFromApi}/>
```

## Requirements & Constraints
In addition to the aforementioned pagination requirements, please take into consideration the following:

 - **Asynchronous:** The pagination component should consume the API one page at a time.  That means when the user goes to a new page, this page should be fetched from the API.  The component should not try to load the entire database in with a single request and then partition this into pages.
 
 - **Lightweight:** The pagination component you design should be able to be used across different React codebases, meaning it should be as lightweight and decoupled as possible.  So while you could store pagination state in Redux, this is not recommended as it would make the component unusable in another codebase that relies on, say, MobX.
 
 - **Re-usable:** The pagination component should be re-usable with a generalized interface, in the following sense:
We should be able to quickly change the type of pagination on any one of the resources without having to modify large sections of code.  For example, if you paginated patients like

    ```<Paginator variant="numbered" {...props}/>```

    then we should be able to easily swap the pagination to

    ```<Paginator variant="infinite" {...props}/>```

    In the same way of thinking, swapping out which resource is being paginated should be just as easy as changing a couple lines - namely, how the resource is consumed and how the resource is rendered.

 - **Components:** You are not required to use any of the pre-built components or modules; they are only provided to save you time.  However, if you do modify the API methods, please keep them asynchronous to mimic a network request to an API server.  If you do use the provided display cards, you do not need to worry about styling them.  You also aren’t required to use the same project structure that has already been provided.
 
 - **External Libraries:** You may use any library as you see fit except for pagination libraries.

Beyond these required items, you are allowed to make any design decision you see fit.  This includes the size of fetched pages, card layout, navigation, whether the component is controlled/uncontrolled, etc…

## Getting to learn your coding style
The goal of this project is to help us learn your unique coding style.  We’re very interested to see your take on this problem.  Some of the things we’ll be observing include
 - How do you organize and break down your components?  How modular and reusable are they?
 - What design patterns (e.g. Higher Order Components, Render Props, React Hooks, Providers/Contexts) do you use to facilitate code reuse?
 
If you have any questions, feel free to shoot us an e-mail or schedule a call.  Good luck!

**Timeframe**
5 days

**Goal**
To create a fully functioning full stack project using next js and to work in groups of 3.

**Deployed version**
https://tracktive.netlify.app/

**Technologies Used**
trackTive is built using the MERN (MongoDB, Express, React, Node.js) stack for a robust and user-friendly experience. It is deployed on Netlify for both the backend and frontend.
MongoDB: Database for storing user profiles, workouts, and calorie data.
Express.js: Backend framework for handling API requests.
React: Frontend framework for creating an intuitive user interface.
Node.js: Runtime environment for server-side code.
tailwind

![Screenshot 2023-11-27 at 11 41 47 (2)](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/a179b923-c134-4f4d-b58a-4ece2afd3a08)
I wanted to create an app from the above spreadsheet where I track my fitness progress. The idea is that you can see what your last weights/reps were and you can change/add more weights or reps according to your previous workout.
This was a group project and I was in charge of the fitness tracker.

Day 1
Created the schema for my workouts and tried to be as close to the spreadsheet as I could. I also created the end points for it and decided that I would use modals on my front end for my forms.

DAy2/4
Started my next js front end and linked myworkourdetails / startworkout / addworkout modal to the api. I realised that I wanted to either create a workout that tracked your weights or a workout that could track your cardio, so I realised they had to be independent from each other. I also wanted to be able to add a workout and not “start a workout” so even though the schema has a date to be able to track when the workout has been performed, it doesn't get added when you first create a workout.
The idea is that you can create a workout and when you decide to “start a workout” in fact you edit the workout you have created with the new weights and the date and that has been created.

Day5
I struggled to visualise the modals and changed the ui quite a lot throughout the days. I also decided that it would be good to have a calendar so you could track when a workout had been performed. Added the styling for my workout page, as we wanted each category to be a launchpad for each. We decided to deploy in the afternoon.
We had quite a few issues with our deployment and couldn't deploy our project fully as google auth is not working. We haven't been able to resolve this issue since deploying the project and we have been trying to deploy with other platforms without much luck
![tracktive](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/160d7d48-f1af-45f0-9679-5d201d73b1a1)
![screenshot_2023-12-05_at_17 15 26](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/9e574ab0-2268-462e-87f6-12267a658280)
![screenshot_2023-12-05_at_17 15 41](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/1c4205f5-3216-4c81-885c-753c959f32b4)
![screenshot_2023-12-05_at_17 15 19](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/ee0f5bf3-9797-471d-be98-d38dd86d600d)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

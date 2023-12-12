**Timeframe**<br>

5 days group project. <br>
https://github.com/MBurton-Johnson<br>
https://github.com/Jeeivan

**Technical Requirements** <br>

-A working full-stack, single-page application <br>
-Incorporate the technologies of the MERN-stack (MongoDB/Mongoose, Express.js, React, Node.js) <br>
-Have a well-styled interactive front-end. <br>
-Communicates with the Express backend via AJAX. <br>
-Implement authentication, including the ability of a user to sign-up, log in & log out. <br>
-Implement authorization by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user. <br>
-Have a well-scoped feature-set. Full-CRUD data operations are not required if one or more other features are included, for example: consume data from a third-party API, implement additional functionality if the user is an admin, Implementation of a highly dynamic UI or -data visualisation.

**Deployed version**

Unfotunately having issues with the deployment.

https://tracktive.netlify.app/

You can find a link for the backend here<br>
https://github.com/AdrianaIaffa/fitness-app-backend

**Technologies Used**<br>

-trackTive is built using the MERN (MongoDB, Express, React, Node.js) stack for a robust and user-friendly experience. <br>
-Netlify for both the backend and frontend.<br>
-MongoDB: Database for storing user profiles, workouts, and calorie data.<br>
-Express.js: Backend framework for handling API requests.<br>
-React: Frontend framework for creating an intuitive user interface.<br>
-Node.js: Runtime environment for server-side code.<br>
-Tailwind<br>

![Screenshot 2023-11-27 at 11 41 47 (2)](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/a179b923-c134-4f4d-b58a-4ece2afd3a08)
I wanted to create an app from the above spreadsheet where I track my fitness progress. The idea is that you can see what your last weights/reps were and you can change/add more weights or reps according to your previous workout.
This was a group project and I was in charge of the fitness tracker.

**Wireframe/Planning**<br>

Since this was a group project, we came up with a list of things that we wanted our app to do and how we would split the workload. We decided that as a standard we would merge every morning and every evening and we developed a pretty nice system to keep up to date
with each other. We use slack as well as zoom to stay in touch and every morning we would have a quick stand up were we discussed what we wanted to work on on that day.

Pages: Login/Sign-up Page: Create a profile and log in using GoogleAuth.

Home Page: Navigation Bar Goals Tracker (stretch goal) Display completed workouts for the week Display foods eaten

Workout Page: Input and log workouts Display workouts in a table Include an "Insert Workout" button with a modal for easy data entry Allow users to choose between resistance training and cardio exercises, with a different input display based on the selection

Nutrition Page: Input and log food consumption Display a list of foods eaten Include an "Insert Food" button with a modal for easy data entry

Work Split: Jeeivan: Landing Page, GoogleAuth, Profile Creator Adriana: Workout Page Matt: Nutrition Page We decided to split the work as above as Adriana was very keen and had a good visual idea on how she wanted the workout page to be displayed. I chose to do the landing page as I was confident in my ability to handle the google login as well as rendering the landing page.

Login Page: Serve as the landing page Integrate GoogleAuth for login If it's the user's first login, direct them to the profile creation page For returning users, redirect them to the home page

Profile Creator: Allow users to input height, gender, age, and weight

Home Page: Feature a navigation bar Serve as a dashboard displaying users' workout history Include a progress bar for calories and weight goals

Workout Page: Display workouts in a table Include an "Insert Workout" button triggering a modal for convenient data input Allow users to choose between resistance training and cardio exercises, with dynamic input displays based on the selection

Nutrition Page: Display a list of foods eaten Include an "Insert Food" button triggering a modal for convenient data input

Stretch Goals: Create an individual profile page for users, allowing them to edit their information Develop a schema for a calendar, incorporating goals for tracking weight and potentially calories Implement a progress bar for calories and weight goals on the homepage Utilize an API for foods to enable users to input food and quantity, fetching calories and macros

MongoDB: Our database plan is straightforward, with each entity (nutrition, workout, calendar) referencing user IDs to ensure each user has personalized data for each entity.

![Screenshot 2023-12-12 at 09 30 31](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/93aeac9a-08e7-4866-87f0-69ef52b67e5e)

**Day 1**<br>
Created the schema for my workouts and tried to be as close to the spreadsheet as I could. I also created the end points for it and decided that I would use modals on my front end for my forms. 
This step was a bit more straightfoward this time around, since this was my second project. We had decided we would keep our schemas all in one page as we previusly did, but after regrouping after the day, Jeevian had decided for his was
best to refractor it, hence our backend being a bit disjointed. Since it didnt affect functionality and we had a short amount of time, we decided at that stage to leave it as it was and potentially refractor the back end in the future if time allowed it, which it didnt.
I also started using Postman this time around, and became a little easier to set up the backend with it. At this stage I wasnt too sure how postman worked but I tried to leanr from a few videos.

**Day 2 / 4**<br>
Started my next js front end and linked myworkourdetails / startworkout / addworkout modal to the api. I realised that I wanted to either create a workout that tracked your weights or a workout that could track your cardio, so I realised they had to be independent from each other. I also wanted to be able to add a workout and not “start a workout” so even though the schema has a date to be able to track when the workout has been performed, it doesn't get added when you first create a workout.
The idea is that you can create a workout and when you decide to “start a workout” in fact you edit the workout you have created with the new weights and the date and that has been created. 
I found next.js to be quite confusing and to be honest I think I made it much harder for myself than I needed to. Becasue I wanted to keep everything quite comparmentalised, I was trying to keep all the components quite small and in doing so I made it too complicated and too messy. By the time I realised this, I it was already too late and I found this really hard to refractor.
Also I had so many issues with all my modals becasuse they were forms and I wanted to build them from scratch, which wasnt ideal.

**Day5**<br>
I struggled to visualise the modals and changed the UI quite a lot throughout the days. I also decided that it would be good to have a calendar so you could track when a workout had been performed. Added the styling for my workout page, as we wanted each category to be a launchpad for each. We decided to deploy in the afternoon.

    // Calculate the day of the week for the 1st day of the month
      const dayOfWeek = startDate.getDay();

    // Create blank cells for days before the 1st day of the month
    for (let i = 0; i < dayOfWeek; i++) {
      currentWeek.push(
        <div key={`blank-${i}`} className="day blank">
          {/* Empty cell */}
        </div>
      );
    }

    for (let day = 1; day <= endDate.getDate(); day++) {
      const currentDate = new Date(currentYear, currentMonth, day);

      const workout = workouts.find((w) =>
        isSameDay(new Date(w.workoutDate), currentDate)
      );

      currentWeek.push(
        <div
          key={day}
          className={`day ${workout ? "has-workout" : ""}`}
          onClick={() => handleDayClick(workout)} // Add this onClick handler
        >
          {currentDate.getDate()}
        </div>
      );

      if (currentDate.getDay() === 0 || day === endDate.getDate()) {
        weeks.push(
          <div key={weeks.length} className="week">
            {currentWeek}
          </div>
        );
        currentWeek = [];
      }
    }

    return weeks;
    };

We had quite a few issues with our deployment and couldn't deploy our project fully as google auth is not working. We haven't been able to resolve this issue since deploying the project and we have been trying to deploy with other platforms without much luck.
![tracktive](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/160d7d48-f1af-45f0-9679-5d201d73b1a1)
![screenshot_2023-12-05_at_17 15 26](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/9e574ab0-2268-462e-87f6-12267a658280)
![screenshot_2023-12-05_at_17 15 41](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/1c4205f5-3216-4c81-885c-753c959f32b4)
![screenshot_2023-12-05_at_17 15 19](https://github.com/AdrianaIaffa/fitness-app/assets/100214999/ee0f5bf3-9797-471d-be98-d38dd86d600d)


**Takeaways from this project**<br>
I found this project much harder to visualised than my previus one, which meant I found it really hard to build. Looking back I should have spent more time trying to figure out how the modals were going to look like and I should have not tried to just build them form scratch, but rather rely more on tailwind. I realised that when you have issues visualising what you are biulding it becomes really hard to move forward and how planning and researching are a huge part of developing an app.
I really liked the calendar I added, and I wish I had more time to develop some sort of tracker where you could see a list of workouts competed by date, but I ran out of time.
Our deployment never worked either, which is quite a shame, but althogh we have tried to fix it, we haven't quite manage just yet.

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

# A simple bar chart display using React JSX and TailwindCSS

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.3.9-brightgreen?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-skyblue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Live Demo:** [https://bar-chart-task.vercel.app/](https://bar-chart-task.vercel.app/)

📌 Run instruction: 
   npm run dev

📌 Here are the key points of implementing this task: 

1- Using flex columns to organize the data of each month next to each other.  
2- Using inside each array item flex rows so the data is displayed below each other.  
3- Wrapping these implementations in an array mapping to display all array items with the month name displayed below.  
4- Won/lost height display: multiplying the value (won/lost) by a variable (h) to illustrate the number through height.  
5- Hovering: I used the hovering technique so upon hovering on any part of an item it displays the number of won/lost legal cases in a div attached to the cursor. I made this using group/item property in tailwindcss which upon hovering the group(won/lost part), the item (invisible div displaying number) becomes visible
6- Slight responsiveness additions: because it is only one component without much details, I just made the text (Bar Chart) and the items width slightly smaller when the screen is small.

📌 What I learned during this task (inspired by dev community website):

It was my very first time to implement this hovering technique (tracking the mouse position) , so handling mousemove event  was the key part
Here is description of how it was implemented: I made a useState named position and the initial values are 0 for both x and y positions(initial mouse coordinates) , added event listener for mousemove where the position state is updated to clientX and clientY which are the mouse position , wrapping them in useEffect so that it doesn't run on every render

📌 Project deployed using Vercel


<img width="800" height="400" alt="image" src="https://github.com/user-attachments/assets/999d53b9-dcf5-466d-9b9c-30a0aba4a8a1" />



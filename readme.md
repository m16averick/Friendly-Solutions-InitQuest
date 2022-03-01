# Friendly Solutions - code task

### Description

- We have included json data snapshot on the bottom of that file. It includes the example of work orders data we process everyday.
- Take 10 minutes to become familiar with the content of the json data before beginning with the tasks and bonus items.
- You should not spend more than 90-120 minutes on this task. The bonus items are extended goal tasks.
- You can use (but you do not need to) MobX or Redux for state management.

### Tasks

1. Initialize React web app project with TypeScript

2. Wrap JSON in Promise and imitiate fetching from remote API

3. Create a screen with table including the following information:

   - WO ID
   - Description
   - Received date
   - Assigned to
   - Status
   - Priority

4. Add types with TypeScript

5. Do a simple styling with flexbox (just to show that you know how it works in case of using it then in React Native)

6. Create a simple README.md with install / usage instructions

### Bonus

1. Search input to search for work orders by description
2. Use custom hooks

There are no right or wrong solutions for this task. Once complete, create a public repo on Github and email us with your solution.

<b style="color:red;">Please do not put this file in repository.</b>

Happy coding.

### JSON

```json
{
  "exec_time": 0.11,
  "response": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "per_page": 10,
    "to": 10,
    "total": 8,
    "data": [
      {
        "work_order_id": 1,
        "description": "Create a connection to SQL database using Excel",
        "received_date": "2021-07-21 00:23:03",
        "assigned_to": [
          {
            "person_name": "Technician One",
            "status": "Assigned"
          }
        ],
        "status": "New",
        "priority": "Low"
      },

      {
        "work_order_id": 2,
        "description": "Need to make update for laptop 11",
        "received_date": "2021-07-20 15:23:03",
        "assigned_to": [
          {
            "person_name": "Technician Two",
            "status": "Assigned"
          }
        ],
        "status": "New",
        "priority": "Low"
      },

      {
        "work_order_id": 3,
        "description": "Setup station 2",
        "received_date": "2021-07-20 14:23:03",
        "assigned_to": [
          {
            "person_name": "Technician One",
            "status": "In progress"
          }
        ],
        "status": "Confirmed",
        "priority": "High"
      },

      {
        "work_order_id": 4,
        "description": "Setup station 3",
        "received_date": "2021-07-19 12:23:03",
        "assigned_to": [
          {
            "person_name": "Technician Two",
            "status": "Assigned"
          },
          {
            "person_name": "Technician One",
            "status": "In progress"
          }
        ],
        "status": "Confirmed",
        "priority": "High"
      },

      {
        "work_order_id": 5,
        "description": "Mailbox issues",
        "received_date": "2021-07-19 11:23:03",
        "assigned_to": [
          {
            "person_name": "Technician Two",
            "status": "Confirmed"
          }
        ],
        "status": "Confirmed",
        "priority": "Normal"
      },

      {
        "work_order_id": 6,
        "description": "Subject: We sent you issue last Friday",
        "received_date": "2021-07-17 11:23:03",
        "assigned_to": [],
        "status": "New",
        "priority": "Low"
      },

      {
        "work_order_id": 7,
        "description": "Internal work",
        "received_date": "2021-07-17 10:23:03",
        "assigned_to": [],
        "status": "Canceled",
        "priority": "Low"
      },

      {
        "work_order_id": 8,
        "description": "Set up station for new user",
        "received_date": "2021-07-16 09:23:03",
        "assigned_to": [
          {
            "person_name": "Technician Two",
            "status": "Completed"
          }
        ],
        "status": "Completed",
        "priority": "Low"
      }
    ]
  }
}
```

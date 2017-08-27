You will have to interface with our API to display and edit data. The object you will have to focus on is the Opportunities object

The assignment will require you to display all the data that is seen here on this page. Display the data in a neat layout. The displayed data also needs to be editable. Implement the edit feature as best you see fit. It can be in a popup modal or on a different page, whatever you decide is best. The data needs to be sent as JSON objects via a PATCH request. 

Basic Introduction Of AIESEC - Our client, AIESEC is the world’s largest youth-run organization. It is present in over 130 countries and focuses on leadership development. They do this by providing students and recent graduates with international internships. These internships are called opportunities. The page shared above is an example of an opportunity as seen on the youth facing side of the AIESEC platform.
The platform is a multi-sided platform and has two main sides- the youth and the company. On the Youth side, students apply to an opportunity. On the Company side, the companies have to create and edit these opportunities. You will be building a part of the company side platform- Displaying and editing Opportunities.

The list of all the API fields that need to be displayed and be editable in your form are- 
“title"
"applications_close_date"
"earliest_start_date"
“latest_end_date”
"description"
"learning_points_list"
"backgrounds"
"skills"
"selection_process"
"salary": "1000000"
 "salary_currency"
 "salary_periodicity"

Points to keep in mind-
Use React or Angular (any version) to build this
Use this Access Token- dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c
Work with opportunity_id: 3
For reference, use opportunity_id: 51, it has everything filled in.
Research in depth on REST APIs before beginning the task.
Explore the API, especially the opportunities object before you start work. See how the requests are being sent.
Host this Application on Heroku or Github pages.
Send us the link to the deployed application and source code repository.



Assessment criteria- 
The level of progress made on the assignment
Use of best case practices
Use of abstraction in code
Bonus points if the following FrontEnd validations are implemented-
Title should not be longer than 100 characters
applications_close_date cannot be less than 30 days from current date
applications_close_date cannot be more than 90 days from current date
Minimum of 5 and maximum of 10 learning_points_list items should be there
All the fields should be required
Bonus points if unit tests are also implemented

If you have any queries, doubts about the API or require any assistance, we will be happy to help you out. You can either set up a call with us or join our slack channel to have your questions answered instantly. Wish you all the best!


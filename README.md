# AddressBookProj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Pull Project From Github
1. Git clone the repository https://github.com/chrisjamaica91/nuvalanceAddressBook.git

2. npm install

3. ng serve

3. navigate to localhost:4200/

## Deploy to AWS S3 Bucket
1. Build project with ng build --configuration production

2. Create a free account on https://aws.amazon.com/console/

3. After account creation navigate to Services => Storage => S3

4. Select create bucket and create bucket name and select region => create bucket

5. Select created bucket => Properties => scroll down to Security Web hosting

6. Select Enable Web Hosting, Host a static website, enter index.html for Index document and Error document. Save Changes

7. Edit Bucket Permission to remove "Block public access"

8. Modify bucket policy with (copy and paste)
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "AddPermission",
			"Principal": "*",
			"Effect": "Allow",
			"Action": ["s3:GetObject"],
			"Resource": ["arn:aws:s3:::mycontactfinder/*"]
		}
	]
}

9. Upload files in 'dist' folder of project to bucket

10. navigate to site
http://mycontactfinder.s3-website-us-east-1.amazonaws.com/login

## Assingment Summary

1. My approach to this project was to first plan out the structure of the project. I decided to go with a modularized approach to this project to take advantage of lazy loading. I created an authentication module with a couple hardcoded user objects with permissions in the authService. Only admin can delete contacts. I have an AuthGuard with canActivate so users who are not authenticated can't access the addressbook or contact details routes. As for the api, I only pulled 200 records and the table pagination is only client side vs also having server side pagination. I also modified my karma.conf.js file to be able to meet a 75% test coverage threshold or else the build would fail. I used Prime NG as a UI library to help with the look and feel, styling, and responsiveness of the application. I did have to do some scss changes to deal with it being responsive on very small mobile devices. I have a Prime Module to handle all of the Prime imports, imported that module into a Shared Module (which I ultimately didn't need), and then imported the Shared Module into the main app module. I also have a module for the address book as well.

2.There are a couple other things I would have liked to complete. I would have liked to have the edit contact dialogue be a reactive form with form validation. The form validation needs more work. For extra features, I would have liked to add in a router resolver when going from the login to the address book pages so that the route won't be navigated to until the data is loaded. I've would also liked to implement a service worker so that the data can be cached and accessed while offline. This probably would have taken me about a day to add in these extra features and test.





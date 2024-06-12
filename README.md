Setup:

install node modules.

After cloning the project, go to clerk.com and create a project. Add .env.local file in your local project and add the following variables:

These two variables will be available once you create a clerk project.NEXT\_PUBLIC\_CLERK\_PUBLISHABLE\_KEY=CLERK\_SECRET\_KEY=

NEXT\_PUBLIC\_CLERK\_SIGN\_IN\_URL=/sign-inNEXT\_PUBLIC\_CLERK\_SIGN\_UP\_URL=/sign-upNEXT\_PUBLIC\_CLERK\_AFTER\_SIGN\_IN\_URL=/dashboardNEXT\_PUBLIC\_CLERK\_AFTER\_SIGN\_UP\_URL=/dashboard

You can get the gemini api key from the websiteGEMINI\_API\_KEY=
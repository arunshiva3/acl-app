# AclApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

# angular2-acl plugin
npm i angular2-acl --save
1. Install the plugin to add acl services and import in app.module.ts
  
2. Create acl data for users to give access permissions (Constants.ts file).
3. After login add user role to service.
4. In header html file check user role and display links based on role
5. If user navigates from browser to an admin's tab we use AclResolver to resolve before loading the component. If the user with role has permission we allow to load the component else we redirect to page not found.



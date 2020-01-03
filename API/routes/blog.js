const express = require('express')
const blogController = require('./../controllers/blogController')
const appConfig = require("./../config/appConfig")


let setRouter = (app) => {
    let baseUrl = appConfig.apiVersion+'/blogs';

    app.get(baseUrl+'/all',blogController.getAllBlog);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */

    app.get(baseUrl+'/view/:blogId',blogController.viewByBlogId);

    app.get(baseUrl+'/view/by/author/:author',blogController.viewByAuthor);

    app.get(baseUrl+'/view/by/category/:category',blogController.viewByCategory);

    app.post(baseUrl+'/:blogId/delete',blogController.deleteBlog);

    app.put(baseUrl+'/edit/:blogId',blogController.editBlog);

    app.post(baseUrl+'/create',blogController.createBlog);

    app.get(baseUrl+'/:blogId/count/view',blogController.increaseBlogView);

    

}// end setRouter function 

module.exports = {
    setRouter: setRouter
}
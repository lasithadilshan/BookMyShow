(function() {
    angular
        .module("BookMyShow")
        .factory("MovieService", MovieService);

    function MovieService($http) {

        var api = {
            "createMovie"   : createMovie,
            "findAllMovies" : findAllMovies,
            "findMovieByTitle" : findMovieByTitle,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser" : deleteUser,
            "findMovieTrailerById" : findMovieTrailerById
        };
        return api;
        
        function findMovieTrailerById(movieId){
        	return $http.get("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=0c8d5deeeea6dbe92c81212ab98f4b40&language=en-US");
        }
        
        function createMovie(newMovie) {
            return $http.post("/api/movie", newMovie);
        }
        function findAllMovies() {
            return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=0c8d5deeeea6dbe92c81212ab98f4b40&language=en-US&page=1");
        }
        function findMovieByTitle(title) {
            return $http.get("/api/movie?title="+title);
        }
        function findUserByCredentials(username, password) {
            return $http.get("/api/user?username="+username+"&password="+password);
        }
        function updateUser(userId, newUser){
            return $http.put("/api/user/"+userId, newUser);
        }
        function deleteUser(userId) {
            return $http.delete('/api/user/'+userId);
        }
    }
})();
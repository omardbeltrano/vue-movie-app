<template>
    <div class="home">
        <div class="feature-card">
            <router-link to="/movie/tt0409591">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/your-name-poster-1547566631.jpeg?crop=0.8xw:1xh;center,top&resize=1200:*" 
                    alt="yourName" class="feature-img">
                <div class="detail">
                    <h3>Your Name</h3>
                    <p> 
                        Your Name (Japanese: 君の名は。, Hepburn: Kimi no Na wa) is a 2016 Japanese animated romantic fantasy film produced by CoMix Wave Films and distributed by Toho. In the film, high school students Taki Tachibana and Mitsuha Miyamizu suddenly begin to swap bodies, despite having never met. The film was commissioned in 2014, written and directed by Makoto Shinkai.
                    </p>
                </div>
            </router-link>
        </div>

        <form @submit.prevent="SearchMovies()" class="search-box">
            <input type="text" placeholder="What are you looking for?" v-model="search">
            <input type="submit" value="search">
        </form>

        <div class="movies-list">
            <div class="movie" v-for="movie in movies" :key="movie.imdbID">
                <router-link :to="`movie/${movie.imdbID}`" class="movie-link">
                    <div class="movie-img">
                        <img :src="movie.Poster" alt="Movie Poster"/>
                        <div class="type">{{ movie.Type }}</div>
                    </div>
                    <div class="movie-detail">
                        <h3>{{movie.Title}}</h3>
                        <p class="year">{{movie.Year}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from "vue";
    import env from "../env";

    export default {
        setup(){
            const search = ref("");
            const movies = ref([]);

            const SearchMovies = () => {
                //Calling url with apikey and search's value
                if (search.value != "") {
                    fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
                        .then(response => response.json())
                        .then(data => {
                            //console.log(data);
                            //This add the movie within the movies' array
                            movies.value = data.Search;
                            //This reset the searcher
                            search.value = "";
                        })
                }
            }
            return{
                search,
                movies,
                SearchMovies
            }
        }
    }
</script>

<style lang="scss" scoped>
.home {
    .feature-card {
        position: relative;
    
        .feature-img {
            display: block;
            width: 100%;
            height: 300px;
            object-fit: cover;

            position: relative;
            z-index: 0;
        }
        
        //Feature detail
        .detail {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.6);
            padding: 16px;
            z-index: 1;
            
            h3 {
                color: #FFF;
                margin-bottom: 16px;
            }

            p {
                color: #FFF;
            }
        }
    }


    .search-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;

        //General inputs
        input {
            display: block;
            appearance: none;
            border: none;
            outline: none;
            background: none;

            //Searcher
            &[type="text"] {
                width: 100%;
                color: #FFF;
                background-color: #496583;
                font-size: 20px;
                padding: 10px 16px;
                border-radius: 8px;
                margin-bottom: 20px;
                transition: .4s;

                &::placeholder{
                color:#FFF;
                }

                &:focus {
                    box-shadow: 0px 3px 6px rgba(0,0,0,0.4);
                }
            }

            //Div buttom
            &[type="submit"] {
                width: 100%;
                max-width: 300px;
                background-color: #42B883;
                padding: 16px;
                border-radius: 8px;
                color: #FFF;
                font-size: 20px;
                text-transform: uppercase;
                transition: 0.4s;
                cursor: pointer;

                &:active {
                    background-color: #3B8070;
                }
            }
        }       
    }

    .movies-list {
            display: flex;
            flex-wrap: wrap;
            margin: 0;

        .movie {
            max-width: 20%;
            flex: 1 1 50%;
            padding: 16px;

            //Elements' order
            .movie-link {
                display: flex;
                flex-direction: column;
                height: 100%;

                .movie-img {
                    position: relative;
                    display: block;

                    img {
                        display: block;
                        width: 100%;
                        height: 350px;
                        object-fit: cover;
                        border-radius: 8px 8px 0px 0px;
                    }

                    //type box
                    .type {
                        position: absolute;
                        padding: 8px 16px;
                        background-color: #42B883;
                        color: #fff;
                        bottom: 16px;
                        left: 0;
                        text-transform: capitalize;
                    }
                }

                .movie-detail {
                    background-color: #496583;
                    padding: 16px 8px;
                    flex: 1 1 100%;
                    border-radius: 0px 0px 8px 8px;

                    h3 {
                        color: #FFF;
                        font-weight: 600;
                        font-size: 18px;
                    }
                    .year {
                        color: #AAA;
                        font-size: 14px;
                    }
                }

                &:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 0px 8px rgba(248, 246, 246, 0.479);
                    border-radius: 8px;
                }
            }
                
        }
    }

}

@media(max-width: 600px){
    .home{
        .movies-list {
            .movie {
                max-width: 50%;
            }
        }
    }
}

</style>
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

        <form @submit.prevent="" class="search-box">
            <input type="text" placeholder="What are you looking for?">
        </form>
    </div>
</template>

<script>
    export default {
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
}
</style>
<template>
    <main>
        <div class="container">
            <h1>{{ translate('About').value}}</h1>
            <h3>{{ translate('about').value[0]}}</h3>

            <ul>
                <li>{{ translate('about').value[2]}}</li>
            </ul>
            <h3>{{ translate('about').value[3]}}</h3>
            <ul>
                <li>{{ translate('about').value[3]}}</li>
                <li>{{ translate('about').value[4]}}</li>
            </ul>

            <h3>{{ translate('about').value[5]}}</h3>
            <ul>
                <li>{{ translate('about').value[6]}}</li>
                <li>{{ translate('about').value[7]}}</li>
                <li>{{ translate('about').value[8]}}</li>
            </ul>

            <h3>{{ translate('about').value[9]}}</h3>
            <ul>
                <li> {{ translate('about').value[10]}}</li>
            </ul>

            <h3>{{ translate('about').value[11]}}</h3>
            <ul>
                <li>{{ translate('about').value[12]}}</li>
            </ul>

            <h3>{{ translate('about').value[13]}}</h3>
            <ul>
                <li>{{ translate('about').value[14]}}</li>
                <li>{{ translate('about').value[15]}}.</li>
                <li>{{ translate('about').value[16]}}.</li>
            </ul>

            <h3>{{ translate('about').value[17]}}</h3>
            <ul>
                <li>{{ translate('about').value[18]}}</li>
            </ul>

            <h3>{{ translate('about').value[19]}}</h3>
            <ul>
                <li>{{ translate('about').value[20]}}</li>
            </ul>

            <h3>{{ translate('about').value[21]}}</h3>
            <ul>
                <li>{{ translate('about').value[22]}}</li>
                <li>{{ translate('about').value[23]}}</li>
                <li>{{ translate('about').value[24]}},</li>
                <li>{{ translate('about').value[25]}}</li>
                <li>{{ translate('about').value[26]}}</li>
            </ul>

            <p>{{ translate('about').value[54]}}</p>
                <br>
            <p>{{ translate('about').value[55]}}</p>

            <ul>
                <li>{{ translate('about').value[27]}}</li>
                <li>{{ translate('about').value[28]}}</li>
                <li>{{ translate('about').value[29]}}</li>
                <li>{{ translate('about').value[30]}}</li>
                <li>{{ translate('about').value[31]}}</li>
            </ul>

            <br>
            <p>{{ translate('about').value[56]}}</p>
            <br>
            <p>{{ translate('about').value[57]}}</p>
            <br>
            <ul>
                <li>{{ translate('about').value[32]}}</li>
            </ul>
            <br>
            <p>{{ translate('about').value[58]}}</p>
            <br>
            <ul>
                <li>{{ translate('about').value[33]}}</li>
                <li>{{ translate('about').value[34]}}.</li>
                <li>{{ translate('about').value[35]}}</li>
                <li>{{ translate('about').value[36]}}</li>
                <li>{{ translate('about').value[37]}}</li>
            </ul>
            <br>
            <p>{{ translate('about').value[59]}}</p>

            <div id="img_about_box"><img src="@/assets/images/license.jpg" alt="" id="about1"></div>
            <p>{{ translate('about').value[60]}}</p>

            <h3>{{ translate('about').value[38]}}</h3>
            <ul>
                <li>{{ translate('about').value[39]}}</li>
                <li>{{ translate('about').value[40]}}</li>
                <li>{{ translate('about').value[41]}}</li>
                <li>{{ translate('about').value[42]}}</li>
            </ul>
            <h3>{{ translate('about').value[43]}}</h3>
            <ul>
                <li>{{ translate('about').value[44]}}</li>
            </ul>
                <br>
                <h4>{{ translate('about').value[45]}}</h4>
                <ul id="link_box">
                    <li> <a href="https://www.trongmc.com/" class="link_color">{{ translate('about').value[46]}}</a></li>
                    <li> <a href="https://t.me/Trongmc_company" class="link_color">{{ translate('about').value[47]}}</a></li>
                    <li><a href="https://t.me/+24Hg5OYpZk9mMWQx" class="link_color">{{ translate('about').value[48]}}</a></li>
                    <li>{{ translate('about').value[49]}}</li>

                </ul>
                <br/><br/><br/>
                <p>{{ translate('about').value[50]}}</p>
           
            <br><p>{{ translate('about').value[51]}}</p><br><br>
            <p>{{ translate('about').value[52]}}</p>
            <br><p>{{ translate('about').value[53]}}</p>
        </div>
    </main>
</template>
    
<script setup>
import UserService from '../../services/UserService';
import { useLocaleStore } from '@/stores/LocaleStore';
import { computed } from 'vue';

const store = useLocaleStore();

// Initialize locale
store.initializeLocale();

const translate = (key) => computed(() => store.translate(key)).value;
</script>

    
<style scoped>
main {
    background: #111;
    display: flex;
    justify-content: center;
    /* align-items: center; */
}

h1{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
}
.container{
    padding: 2em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
ul,li,p{
    line-height: 1.5em;
}
h3{
    padding: .7em 0px;
}
h4{
    line-height: 2em;
}
#img_about_box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;

}
#about1{
    width: 90%;
    object-fit: cover;

    
}
.link_color{
    color: #8888ff;
}
</style>
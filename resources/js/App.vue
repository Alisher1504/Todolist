<template>
    

    <div class="d-flex flex-column flex-root app-root" id="kt_app_root">

        <div class="app-page flex-column flex-column-fluid" id="kt_app_page">

            <Header />

            <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

                <Sidebar />

                <div class="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <router-view></router-view>

                </div>

            </div>

        </div>

    </div>


</template>

<script>
    
    import Header from '../js/components/include/header/Header.vue';
    import Sidebar from '../js/components/include/sidebar/Sidabar.vue'
// import '../../public/assets/js/custom/widgets.js';
    export default {
        components: {
            Header,
            Sidebar
        }
    }

</script>


<style>
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    border-color: #4c5362 !important;
    background-color: #4c5362 !important;
    box-shadow: -1px 0 0 0 #4c5362;
}

.el-radio-button__inner:hover {
    color: black !important;
}

.el-radio-button__orig-radio:checked+.el-radio-button__inner:hover {
    color: #fff !important;
}

.tab-active {
    display: block;
}
</style>
<style lang="scss" scoped>

.u-hamburger__inner {
    background: #fff;
    &::before, &::after {
        background: #fff;
    }
}

.ec.ec-search {
    &::before {
        color: #fff;
    }
}

.resp-logo {
    content: url('../assets/images/logo/itlab.png');
}

.backtop {
  opacity: 1;
  transform: rotate(180deg);
  color: #393d3e;
}
@media screen and (max-width: 1000px) {
  .hiddenMobile {
    display: none;
  }
  .mobilepadding {
      margin-left: 20px;
  }
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}

.catogory-grp {
    position: relative;
    
    .category-more {
        position: absolute;
        right: 0;
        top: 10px;
        a {
            color: #4c5362;
        }
    }
}


.swiper-container {
    overflow: hidden;
    position: relative;

    .swiper-button-prev {
        background: #d9d9d9 !important;
        width: 50px !important;
        height: 50px !important;
        border-radius: 50% !important;
    }

    .swiper-slide {
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        padding: 10px;

        &:hover {
            border-color: #4c5362;
        }

        .product-container {
            display:  flex;
            flex-direction: column;

            .product-name {
                font-size: 0.8vw;
                line-height: 1.125rem;
                width: 90%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .product-actions {
                width: 100%;
                .prodcut-add-cart {
                    float: right;
                }
            }
        }
    }
}

.navigator-button {
    width: 40px;
    height: 40px;
    background: #4c5362;
    border-radius: 50%;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    i {
        color: #fff;
        font-size: 20px;
    }

    &.left {
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
    }
    &.right {
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
    }
}

@media (max-width: 1200px) {
    .resp-logo {
        content: url('../assets/images/logo/itlabwhite.png');
    }

    .navigator-button {
        display: none;
    }
}
</style>
<template>
    <div>
        <header id="header" class="u-header u-header-left-aligned-nav">
            <div class="u-header__section">
                <TopBar />
                <div class="py-2 py-xl-5 bg-primary-down-lg">
                    <div class="container my-0dot5 my-xl-0">
                        <div class="row align-items-center">
                            <!-- Logo-offcanvas-menu -->
                            <div class="col-auto">
                                <!-- Nav -->
                                <nav class="navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270">
                                    <!-- Logo -->
                                    <router-link class="order-1 order-xl-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-center" to="/home" aria-label="Electro">
                                        <div style="width: 120px; position: relative;">
                                            <img class="resp-logo" style="width: 100%; height: auto;">
                                        </div>
                                    </router-link>

                                    <!-- Fullscreen Toggle Button -->
                                    <button id="sidebarHeaderInvokerMenu" type="button" class="navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0"
                                        aria-controls="sidebarHeader"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-unfold-event="click"
                                        data-unfold-hide-on-scroll="false"
                                        data-unfold-target="#sidebarHeader1"
                                        data-unfold-type="css-animation"
                                        data-unfold-animation-in="fadeInLeft"
                                        data-unfold-animation-out="fadeOutLeft"
                                        data-unfold-duration="500">
                                        <span id="hamburgerTriggerMenu" class="u-hamburger__box" >
                                            <span class="u-hamburger__inner" ></span>
                                        </span>
                                    </button>
                                    <!-- End Fullscreen Toggle Button -->
                                </nav>
                                <!-- End Nav -->

                                <!-- ========== HEADER SIDEBAR ========== -->
                                <aside id="sidebarHeader1" class="u-sidebar u-sidebar--left" aria-labelledby="sidebarHeaderInvoker">
                                    <div class="u-sidebar__scroller">
                                        <div class="u-sidebar__container">
                                            <div class="u-header-sidebar__footer-offset">
                                                <!-- Toggle Button -->
                                                <div class="position-absolute top-0 right-0 z-index-2 pt-4 pr-4 bg-white">
                                                    <button type="button" class="close ml-auto"
                                                        aria-controls="sidebarHeader"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-unfold-event="click"
                                                        data-unfold-hide-on-scroll="false"
                                                        data-unfold-target="#sidebarHeader1"
                                                        data-unfold-type="css-animation"
                                                        data-unfold-animation-in="fadeInLeft"
                                                        data-unfold-animation-out="fadeOutLeft"
                                                        data-unfold-duration="500">
                                                        <span aria-hidden="true"><i class="ec ec-close-remove text-gray-90 font-size-20"></i></span>
                                                    </button>
                                                </div>
                                                <!-- End Toggle Button -->

                                                <!-- Content -->
                                                <div class="js-scrollbar u-sidebar__body">
                                                    <div id="headerSidebarContent" class="u-sidebar__content u-header-sidebar__content">
                                                        <!-- Logo -->
                                                        <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center mb-3" href="javascript:;" aria-label="Electro">
                                                            <div style="width: 120px; position: relative;">
                                                                <img src="@/assets/images/logo/itlab.png" style="width: 100%; height: auto;">
                                                            </div>
                                                        </a>
                                                        <!-- End Logo -->

                                                        <!-- List -->
                                                        <ul id="headerSidebarList" class="u-header-collapse__nav">
                                                            <!-- Home Section -->
                                                            <li v-for="(item, index) in categories.main" :key="index" class="u-has-submenu u-header-collapse__submenu">
                                                                <a class="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarHomeCollapse" :data-target="'#headerSidebarHomeCollapse'+index">
                                                                    {{item.category_name}}
                                                                </a>

                                                                <div :id="'headerSidebarHomeCollapse' + index" class="collapse" data-parent="#headerSidebarContent">
                                                                    <ul id="headerSidebarHomeMenu" class="u-header-collapse__nav-list">
                                                                        <!-- Home - v1 -->
                                                                        <li><router-link class="u-header-sidebar__sub-menu-title" :to="'/category/'+item.id">{{item.category_name}}</router-link></li>
                                                                        <li v-for="(sub, i) in filterSub(item.id)" :key="i+'1'"><router-link class="u-header-collapse__submenu-nav-link" :to="'/sub-category/'+sub.id">{{sub.sub_category_name}}</router-link></li>
                                                                        <!-- End 404 -->
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <!-- End Content -->
                                            </div>
                                            <!-- Footer -->
                                            <!-- End Footer -->
                                        </div>
                                    </div>
                                </aside>
                                <!-- ========== END HEADER SIDEBAR ========== -->
                            </div>
                            <!-- End Logo-offcanvas-menu -->
                            <!-- Search Bar -->
                            <div class="col d-none d-xl-block">
                                <form class="js-focus-state" @submit.prevent="addSearch">
                                    <label class="sr-only" for="searchproduct">Search</label>
                                    <div class="input-group">
                                        <input type="text" v-model="search" class="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary" name="main-search" id="searchproduct-item" placeholder="Бүтээгдэхүүн хайх" aria-label="Бүтээгдэхүүн хайх" aria-describedby="searchProduct1" required>
                                        <div class="input-group-append">
                                            <button class="btn  height-40 py-2 px-3" type="submit" id="searchProduct1" style="background-color: #4c5362;;border-color: #4c5362;;color: #fff;">
                                                <span class="ec ec-search font-size-24"></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- End Search Bar -->
                            <!-- Header Icons -->
                            <div class="col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static">
                                <div class="d-inline-flex">
                                    <ul class="d-flex list-unstyled mb-0 align-items-center">
                                        <!-- Search -->
                                        <li class="col d-xl-none px-2 px-sm-3 position-static">
                                            <el-tooltip class="item" effect="dark" content="Хайлт" placement="top">
                                            <a id="searchClassicInvoker" class="font-size-22 text-gray-90 text-lh-1 btn-text-secondary" href="javascript:;" role="button"
                                                aria-controls="searchClassic"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                data-unfold-target="#searchClassic"
                                                data-unfold-type="css-animation"
                                                data-unfold-duration="300"
                                                data-unfold-delay="300"
                                                data-unfold-hide-on-scroll="true"
                                                data-unfold-animation-in="slideInUp"
                                                data-unfold-animation-out="fadeOut">
                                                <span class="ec ec-search"></span>
                                            </a>
                                            </el-tooltip>
                                            <!-- Input -->
                                            <div id="searchClassic" class="dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2" aria-labelledby="searchClassicInvoker">
                                                <form class="js-focus-state input-group px-3" @submit.prevent="addSearch">
                                                    <input v-model="search" class="form-control" type="search" placeholder="Бүтээгдэхүүн хайх">
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary px-3" type="submit"><i class="font-size-18 ec ec-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- End Input -->
                                        </li>
                                        <li class="col d-none d-xl-block">
                                            <el-tooltip class="item" effect="dark" content="Харьцуулах" placement="top">
                                                <router-link to="/compare" class="text-gray-90">
                                                <i class="font-size-22 ec ec-compare"></i></router-link>
                                            </el-tooltip>
                                        </li>
                                        <li class="col d-none d-xl-block">
                                            <el-tooltip class="item" effect="dark" content="Хадгалсан" placement="top">
                                                <router-link :to="'/profile?role=saved'" class="text-gray-90"><i class="font-size-22 ec ec-favorites"></i></router-link>
                                            </el-tooltip>
                                        </li>
                                        <li class="col d-xl-none px-2 px-sm-3">
                                            <el-tooltip class="item" effect="dark" content="Хувийн мэдээлэл" placement="top">
                                                <!-- <a href="javascript:;" class="text-gray-90">
                                                <i class="font-size-22 ec ec-user"></i></a> -->
                                                <router-link style="color: #fff;" to="/profile" class="text-gray-90"><i class="font-size-22 ec ec-user"></i></router-link>
                                            </el-tooltip>
                                        </li>
                                        <li class="col pr-xl-0 px-2 px-sm-3 d-xl-none">
                                            <el-tooltip class="item" effect="dark" content="Сагс" placement="top">
                                            <router-link to="/cart" class="text-gray-90 position-relative d-flex" style="color: #fff;">
                                                <i class="font-size-22 ec ec-shopping-bag"></i>
                                                <span class="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12" style="color: #fff;">{{cart.total}}</span>
                                                <span class="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">₮{{cart.amount}}</span>
                                            </router-link>
                                            </el-tooltip>
                                        </li>
                                        <li class="col pr-xl-0 px-2 px-sm-3 d-none d-xl-block">
                                            <el-tooltip class="item" effect="dark" content="Сагс" placement="top">
                                                <el-dropdown trigger="click">
                                                    <span class="el-dropdown-link" :style="{'cursor': 'pointer'}">
                                                        <div id="basicDropdownHoverInvoker" class="text-gray-90 position-relative d-flex"
                                                            aria-controls="basicDropdownHover"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            data-unfold-event="click"
                                                            data-unfold-target="#basicDropdownHover"
                                                            data-unfold-type="css-animation"
                                                            data-unfold-duration="300"
                                                            data-unfold-delay="300"
                                                            data-unfold-hide-on-scroll="true"
                                                            data-unfold-animation-in="slideInUp"
                                                            data-unfold-animation-out="fadeOut">
                                                            <i class="font-size-22 ec ec-shopping-bag"></i>
                                                            <span class="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12" :style="{'border': '1px solid grey', 'color': '#fff'}">{{cart.total}}</span>
                                                            <span class="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">₮{{cart.amount}}</span>
                                                        </div>
                                                    </span>
                                                    <el-dropdown-menu slot="dropdown" class="border-top border-top-primary mt-3 border-width-2 border-left-0 border-right-0 border-bottom-0"> 
                                                        <div aria-labelledby="basicDropdownHoverInvoker">
                                                            <ul v-if="cart.product!= null && cart.product.length" class="list-unstyled px-3 pt-3">
                                                                <li v-for="(item, index) in cart.product" :key="index" class="border-bottom pb-3 mb-3">
                                                                    <div class="">
                                                                        <ul class="list-unstyled row mx-n2">
                                                                            <li class="px-2 col-auto">
                                                                                <img class="img-fluid" :src="$appUrl+'/images/product/'+item.image" alt="Image Description" :style="{'width': '50px', 'height': '50px'}">
                                                                            </li>
                                                                            <li class="px-2 col">
                                                                                <h5 class="text-blue font-size-14 font-weight-bold">{{item.model}} {{item.name}}</h5>
                                                                                <span v-if="item.discount > 0" class="font-size-14">{{item.qty}} × ₮{{Number(item.price * ((100 - item.discount) / 100)).toLocaleString()}}</span>
                                                                                <span v-else class="font-size-14">{{item.qty}} × ₮{{Number(item.price).toLocaleString()}}</span>
                                                                            </li>
                                                                            <li class="px-2 col-auto">
                                                                                <a href="javascript:;" @click="removeCart(item.id)" class="text-gray-90"><i class="ec ec-close-remove"></i></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <ul v-else class="list-unstyled px-3 pt-3">
                                                                <div align="center" :style="{'width': '300px'}">
                                                                    <img src="@/assets/images/logo/cart.png" style="width: 50%; height: auto;" class="mb-2"><br>
                                                                    <p style="font-size: 15px;" class="mb-1">Таны сагс хоосон байна</p>
                                                                </div>
                                                            </ul>
                                                            <div class="flex-center-between px-4 pt-2">
                                                                <router-link to="/cart" class="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5">Харах</router-link>
                                                                <router-link to="/shipping" class="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5">Худалдаж авах</router-link>
                                                            </div>
                                                        </div>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </el-tooltip>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Header Icons -->
                        </div>
                    </div>
                </div>
                <div class="d-none d-xl-block container">
                    <div class="row">
                        <!-- Vertical Menu -->
                        <div class="col-md-auto d-none d-xl-block">
                            <div class="max-width-270 min-width-270">
                                <!-- Basics Accordion -->
                                <div id="basicsAccordion">
                                    <!-- Card -->
                                    <div class="card border-0">
                                        <div class="card-header card-collapse border-0" id="basicsHeadingOne">
                                            <button type="button" class="btn-link btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90 transition-3d-hover" style="background-color: #4c5362;;border-color: #4c5362;;color: #fff;"
                                                data-toggle="collapse"
                                                data-target="#basicsCollapseOne"
                                                aria-expanded="true"
                                                aria-controls="basicsCollapseOne">
                                                <span class="ml-0 mr-2">
                                                    <span class="fa fa-list-ul"></span>
                                                </span>
                                                <span class="pl-1">Ангилал</span>
                                            </button>
                                        </div>
                                        <div id="basicsCollapseOne" class="collapse show vertical-menu"
                                            aria-labelledby="basicsHeadingOne"
                                            data-parent="#basicsAccordion">
                                            <div class="card-body p-0">
                                                <nav class="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized">
                                                    <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                                                        <ul class="navbar-nav u-header__navbar-nav">
                                                            <!-- Nav Item MegaMenu -->
                                                            <li v-for="(item, index) in categories.main" :key="index" class="nav-item hs-has-mega-menu u-header__nav-item"
                                                                data-event="hover"
                                                                data-animation-in="slideInUp"
                                                                data-animation-out="fadeOut"
                                                                data-position="left">
                                                                <router-link id="basicMegaMenu" class="nav-link u-header__nav-link u-header__nav-link-toggle" :to="'/category/'+item.id" aria-haspopup="true" aria-expanded="false">
                                                                    <span style="width: 12%;">
                                                                        <!-- <i class="fas fa-briefcase"></i> -->
                                                                        <img :src="$appUrl+'/images/menu/'+item.icon" :style="{'width': '15px', height: '15px'}">
                                                                    </span>
                                                                    <span style="width: 87%">    
                                                                        {{item.category_name}}
                                                                    </span>
                                                                </router-link>

                                                                <!-- Nav Item - Mega Menu -->
                                                                <div class="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu">
                                                                    <div class="vmm-bg">
                                                                        <img class="img-fluid" :src="$appUrl+'/images/category/'+item.image" alt="Image Description">
                                                                    </div>
                                                                    <div class="row u-header__mega-menu-wrapper">
                                                                            <div v-if="filterSub(item.id).length > 5" class="row">
                                                                                <div class="col mb-3 mb-sm-0">
                                                                                    <span class="u-header__sub-menu-title">{{item.category_name}}</span>
                                                                                    <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                        <li v-for="(sub, i) in filterSub(item.id).slice(0,5)" :key="i+'sub'">
                                                                                            <router-link class="nav-link u-header__sub-menu-nav-link" :to="'/sub-category/'+sub.id">{{sub.sub_category_name}}</router-link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>

                                                                                <div class="col mb-3 mb-sm-0">
                                                                                    <span class="u-header__sub-menu-title">{{item.category_name}}</span>
                                                                                    <ul class="u-header__sub-menu-nav-group">
                                                                                        <li v-for="(sub, i) in filterSub(item.id).slice(5,filterSub(item.id).length)" :key="i+'sub2'">
                                                                                            <router-link class="nav-link u-header__sub-menu-nav-link" :to="'/sub-category/'+sub.id">{{sub.sub_category_name}}</router-link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div v-else>
                                                                                <div class="col mb-3 mb-sm-0">
                                                                                    <span class="u-header__sub-menu-title">{{item.category_name}}</span>
                                                                                    <ul class="u-header__sub-menu-nav-group mb-3">
                                                                                        <li v-for="(sub, i) in filterSub(item.id)" :key="i+'sub3'">
                                                                                            <router-link class="nav-link u-header__sub-menu-nav-link" :to="'/sub-category/'+sub.id">{{sub.sub_category_name}}</router-link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                <!-- End Nav Item - Mega Menu -->
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Card -->
                                </div>
                                <!-- End Basics Accordion -->
                            </div>
                        </div>
                        <!-- End Vertical Menu -->
                        <!-- Secondary Menu -->
                        <div class="col">
                            <!-- Nav -->
                            <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
                                <!-- Navigation -->
                                <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
                                    <ul class="navbar-nav u-header__navbar-nav">
                                        <li class="nav-item u-header__nav-item">
                                            <router-link class="nav-link u-header__nav-link" to="/top-20" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Өндөр борлуулалттай</router-link>
                                        </li>

                                        <!-- Featured Brands -->
                                        <li class="nav-item u-header__nav-item">
                                            <router-link class="nav-link u-header__nav-link" to="/trend" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Трэнд бүтээгдэхүүн</router-link>
                                        </li>
                                        <!-- End Featured Brands -->

                                        <!-- Trending Styles -->
                                        <li class="nav-item u-header__nav-item">
                                            <router-link class="nav-link u-header__nav-link text-sale" to="/new-arrival" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Шинэ</router-link>
                                        </li>

                                        <li class="nav-item u-header__nav-item" :style="{'position': 'relative'}">
                                            <router-link class="nav-link u-header__nav-link" to="/brands" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Брэндүүд</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <!-- End Navigation -->
                            </nav>
                            <!-- End Nav -->
                        </div>
                        <!-- End Secondary Menu -->
                    </div>
                </div>
            </div>
        </header>

        <main id="content" role="main">
            <div class="mb-5">
                    <div class="bg-img-hero" :style="{'background-image': `url(${require(`@/assets/images/banner/home-banner.jpg`)})`}">
                    <div class="container min-height-420 overflow-hidden">
                        <div class="min-height-420">
                            <el-carousel :interval="5000" arrow="never" class="min-height-420" :style="{'width': '100%', 'height': '100%'}" v-loading.fullscreen.lock="fullscreenLoading">
                                <el-carousel-item v-for="(item, index) in homeBanner.list" :key="index" class="min-height-420">
                                    <div class="row min-height-420 py-7 py-md-0">
                                        <div class="offset-xl-3 col-xl-4 col-6 mt-md-8">
                                            <h1 class="font-size-64 text-lh-57 font-weight-light"
                                                data-scs-animation-in="fadeInUp">
                                                {{item.title_1}} <span class="d-block font-size-55">{{item.title_2}}</span>
                                            </h1>
                                            <h6 class="font-size-15 font-weight-bold mb-3"
                                                data-scs-animation-in="fadeInUp"
                                                data-scs-animation-delay="200">{{item.title_3}}
                                            </h6>
                                            <div class="mb-4"
                                                data-scs-animation-in="fadeInUp"
                                                data-scs-animation-delay="300">
                                                <div class="font-size-50 font-weight-bold text-lh-45">
                                                    <sup class="">₮</sup>{{Number(item.sale_price).toLocaleString()}}
                                                </div>
                                            </div>
                                            <router-link :to="'/single-product/'+item.product_id" class="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16"
                                                data-scs-animation-in="fadeInUp"
                                                data-scs-animation-delay="400">
                                                Дэлгэрэнгүй
                                            </router-link>
                                        </div>
                                        <div class="col-xl-5 col-6  d-flex align-items-center"
                                            data-scs-animation-in="zoomIn"
                                            data-scs-animation-delay="500">
                                            <img class="img-fluid" :src="$appUrl+'/images/banner/'+item.image" alt="Image Description">
                                        </div>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="mb-5">
                    <div class="row">
                        <div v-for="(item, index) in categories.quick" :key="index" class="col-md-6 mb-4 mb-xl-0 col-xl-3">
                            <router-link :to="'/sub-category/'+item.id" class="d-black text-gray-90">
                                <div class="min-height-132 py-1 d-flex bg-gray-1 align-items-center" :style="{'border-radius': '10px'}">
                                    <div class="col-6 col-xl-5 col-wd-6 pr-0">
                                        <img class="img-fluid" :src="$appUrl+'/images/category/'+item.image" alt="Image Description">
                                    </div>
                                    <div class="col-6 col-xl-7 col-wd-6">
                                        <div class="mb-2 pb-1 font-size-18 font-weight-light text-ls-n1 text-lh-23">
                                            ALL <strong>{{item.sub_category_name}}</strong> HERE
                                        </div>
                                        <div class="link text-gray-90 font-weight-bold font-size-15" href="#">
                                            Дэлгэрэнгүй
                                            <span class="link__icon ml-1">
                                                <span class="link__icon-inner"><i class="ec ec-arrow-right-categproes"></i></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;" @change="changeTab">
                    <el-radio-button label="recommended">Санал болгох</el-radio-button>
                    <el-radio-button label="discounted">Хямдралтай</el-radio-button>
                    <el-radio-button label="toprated">Өндөр үнэлгээтэй</el-radio-button>
                </el-radio-group>

                <div class="tab-content" id="pills-tabContent">
                    <div role="tabpanel" style="position: relative;">
                        <div class="navigator-button left" v-if="fillRadio.length > 5" @click="prevSwiper('tabswiper')">
                            <i class="el-icon-arrow-left"></i>
                        </div>
                        <div class="navigator-button right" v-if="fillRadio.length > 5" @click="nextSwiper('tabswiper')">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                        <swiper
                            
                            :space-between="10"
                            :loop="true"
                            :breakpoints="breakpoints"
                            v-if="featured.length > 0"
                            ref="tabswiper">
                            <swiper-slide v-for="(item, index) in fillRadio" :key="index" class="test">
                                <div class="product-container">
                                    <h5 class="mb-3 product-name"><router-link :to="'/single-product/'+item.id" class="text-blue font-weight-bold">{{item.model}} {{item.name}}</router-link></h5>

                                    <div class="mb-2">
                                        <router-link :to="'/single-product/'+item.id" class="d-block text-center"><img class="img-fluid" :src="$appUrl+'/images/product/'+item.image" :alt="item.name"></router-link>
                                    </div>

                                    <div class="flex-center-between mb-1 mt-5">
                                        <div class="flex-center-between mb-1 product-actions">
                                            <div v-if="item.discount > 0" class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                                <ins class="font-size-20 text-red text-decoration-none mr-2">₮{{Number(item.sale_price * ((100 - item.discount) / 100)).toLocaleString()}}</ins>
                                                <del class="font-size-12 tex-gray-6 position-absolute bottom-100" style="top: -9px;">₮{{Number(item.sale_price).toLocaleString()}}</del>
                                            </div>
                                            <div v-else class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                                <ins class="font-size-20 text-decoration-none mr-2">₮{{Number(item.sale_price).toLocaleString()}}</ins>
                                                <ins class="font-size-12 text-decoration-none tex-gray-6 position-absolute bottom-100" style="top: -9px; vertical-align: middle;"><i class="fas fa-gift"></i> {{Number(item.sale_price / 100 * item.bonus_percent).toLocaleString()}}₮</ins>
                                            </div>
                                            <div class="d-none d-xl-block prodcut-add-cart">
                                                <a href="javascript:;" @click="addCart([1, item])" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                </div>
            </div>
            
            <div class="products-group-4-1-4 space-1">
                <div class="container">
                    <div class="mb-6 mt-5 catogory-grp" v-for="(item, index) in random.category" :key="index+'c'">
                        <h3 class="mb-3 pb-2 font-size-22" style="font-weight: 700;">{{item.category_name}}</h3>
                        <div class="category-more">
                            <!-- el-icon-arrow-right -->
                            <router-link :to="'/category/' + item.id" class="">Дэлгэрэнгүй <i class="el-icon-arrow-right"></i></router-link>
                        </div>

                        <div class="navigator-button left" @click="prevSwiper('swiper'+item.id)">
                            <i class="el-icon-arrow-left"></i>
                        </div>
                        <div class="navigator-button right" @click="nextSwiper('swiper'+item.id)">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                        <swiper
                            :breakpoints="breakpoints"
                            :space-between="10"
                            :loop="true"
                            :ref="'swiper'+item.id">
                            <swiper-slide v-for="(item, index) in recently" :key="index" class="test">
                                <div class="product-container">
                                    <h5 class="mb-3 product-name"><router-link :to="'/single-product/'+item.id" class="text-blue font-weight-bold">{{item.model}} {{item.name}}</router-link></h5>

                                    <div class="mb-2">
                                        <router-link :to="'/single-product/'+item.id" class="d-block text-center"><img class="img-fluid" :src="$appUrl+'/images/product/'+item.image" :alt="item.name"></router-link>
                                    </div>

                                    <div class="flex-center-between mb-1 mt-5">
                                        <div class="flex-center-between mb-1 product-actions">
                                            <div v-if="item.discount > 0" class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                                <ins class="font-size-20 text-red text-decoration-none mr-2">₮{{Number(item.sale_price * ((100 - item.discount) / 100)).toLocaleString()}}</ins>
                                                <del class="font-size-12 tex-gray-6 position-absolute bottom-100" style="top: -9px;">₮{{Number(item.sale_price).toLocaleString()}}</del>
                                            </div>
                                            <div v-else class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                                <ins class="font-size-20 text-decoration-none mr-2">₮{{Number(item.sale_price).toLocaleString()}}</ins>
                                                <ins class="font-size-12 text-decoration-none tex-gray-6 position-absolute bottom-100" style="top: -9px; vertical-align: middle;"><i class="fas fa-gift"></i> {{Number(item.sale_price / 100 * item.bonus_percent).toLocaleString()}}₮</ins>
                                            </div>
                                            <div class="d-none d-xl-block prodcut-add-cart">
                                                <a href="javascript:;" @click="addCart([1, item])" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>

            </div>

            <div class="container">
                hello
            </div>
            
            <div class="container">
                <div class="mb-6 mt-5">
                    <h3 class="mb-3 pb-2 font-size-22">Сүүлд үзсэн</h3>
                    <swiper
                        :breakpoints="breakpoints"
                        :space-between="10"
                        :loop="true"
                        ref="swiper"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange">
                        <swiper-slide v-for="(item, index) in recently" :key="index" class="test">
                            <div class="product-container">
                                <h5 class="mb-1 product-name"><router-link :to="'/single-product/'+item.id" class="text-blue font-weight-bold">{{item.model}} {{item.name}}</router-link></h5>

                                <div class="mb-2">
                                    <router-link :to="'/single-product/'+item.id" class="d-block text-center"><img class="img-fluid" :src="$appUrl+'/images/product/'+item.image" :alt="item.name"></router-link>
                                </div>

                                <div class="flex-center-between mb-1">
                                    <div class="flex-center-between mb-1 product-actions">
                                        <div v-if="item.discount > 0" class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                            <ins class="font-size-20 text-red text-decoration-none mr-2">₮{{Number(item.sale_price * ((100 - item.discount) / 100)).toLocaleString()}}</ins>
                                            <del class="font-size-12 tex-gray-6 position-absolute bottom-100" style="top: -9px;">₮{{Number(item.sale_price).toLocaleString()}}</del>
                                        </div>
                                        <div v-else class="prodcut-price d-flex align-items-center flex-wrap position-relative">
                                            <ins class="font-size-20 text-decoration-none mr-2">₮{{Number(item.sale_price).toLocaleString()}}</ins>
                                            <ins class="font-size-12 text-decoration-none tex-gray-6 position-absolute bottom-100" style="top: -9px; vertical-align: middle;"><i class="fas fa-gift"></i> {{Number(item.sale_price / 100 * item.bonus_percent).toLocaleString()}}₮</ins>
                                        </div>
                                        <div class="d-none d-xl-block prodcut-add-cart">
                                            <a href="javascript:;" @click="addCart([1, item])" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </main>
        <Brands />
    </div>
</template>
<script>
import TopBar from "@/components/topbar";
import Brands from "@/components/brands";
import { Carousel, Slide } from 'vue-carousel';

import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination])
let countdown = null;
let timer = null;
export default {
    components: {
        TopBar,
        Brands,
        Carousel, 
        Slide,
        Swiper,
        SwiperSlide
    },
    created() {
        var r = JSON.parse(localStorage.getItem('recently'));
        if(r != null ) {
            for (let i = r.length - 1; i >= 0; i--) {
                this.recently.push(r[i]);                 
            }
        }
        this.calcCart();
    },
    data() {
        return {
            tabPosition: 'recommended',
            showCountdown: false,
            slickSetting: {
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1
            },
            fullscreenLoading: false,
            cart: {
                total: 0,
                amount: 0,
                product: []
            },
            homeBanner: {
                list: [],
                index: 0
            },
            categories: {
                main: [],
                sub: [],
                quick: []
            },
            featured: [],
            discount: [],
            topRated: [],
            special: '',
            countdown: {
                day: 0,
                hour: 0,
                min: 0,
                sec: 0
            },
            hashtags: [],
            random: {
                category: [],
                product: []
            },
            top: {
                brand: [],
                product: []
            },
            search: '',
            recently: [],
            banners: [],
            events: [],
            eventIndex : -1,
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 10
                }
            }
        }
    },
    mounted() {
        this.getInfo();
        this.getJquery();          
    },
    beforeRouteLeave (to, from , next) {
        clearInterval(countdown);
        clearInterval(timer);
        next();
    },
    computed: {
        fillRadio() {
            if (this.tabPosition === 'recommended') {
                return this.featured;
            }

            if (this.tabPosition === 'discounted') {
                return this.discount;
            }

            return this.topRated;
        }
    },
    methods: {
        nextSwiper(ref) {
            
            const swiper = this.$refs[ref];
            
            if (!swiper) {
                return;
            }


            const selected = Array.isArray(swiper) ? swiper[0].swiperRef : swiper.swiperRef;

            selected.slideNext();
        },
        prevSwiper(ref) {
            const swiper = this.$refs[ref];
            if (!swiper) {
                return;
            }

            const selected = Array.isArray(swiper) ? swiper[0].swiperRef : swiper.swiperRef;

            selected.slidePrev();
        },
        changeTab () {
            this.$refs.tabswiper.swiperRef.update();
        },
        onSwiper (swiper) {
            console.log(swiper);
        },
        onSlideChange () {
            console.log('slide change')
        },
        toSubCategory(id) {
            alert(id);
        },
        goBonus() {
           const user = JSON.parse(localStorage.getItem('user'));
            if(user) {
                this.$router.push('/profile');
            } else {
                this.$router.push('/bonus');
            } 
        },
        checkBonus() {
            const user = JSON.parse(localStorage.getItem('user'));
            if(user) {
                return `Миний бонус ${Number(user.bonus).toLocaleString()}`
            } else {
                return 'Бонус';
            }
        },
        addSearch() {
            if(this.search != '') {
                this.$router.push('/search?p='+this.search);
            }
        },
        addCompare(id) {
            var products = [];
            let compare = JSON.parse(localStorage.getItem('compare'));
            if(compare != null && compare.length > 0) {
                if(compare.length > 3) {
                    this.$notify({
                        title: 'Амжилтгүй',
                        message: `Уучлаарай 4-өөс илүү бараа нэмэх боломжгүй`,
                        type: 'error'
                    });
                } else {
                    let ex = compare.some(function(field) {
                        return field == id
                    });
                    if(ex) {
                        this.$notify({
                            title: 'Амжилттай',
                            message: `Бүтээгдэхүүн нэмэгдлээ`,
                            type: 'success'
                        });
                    } else {
                        compare.forEach(element => {
                            products.push(element);
                        });
                        products.push(id);
                        localStorage.compare = JSON.stringify(products);
                        this.$notify({
                            title: 'Амжилттай',
                            message: `Бүтээгдэхүүн нэмэгдлээ`,
                            type: 'success'
                        });
                    }
                }
            } else {
                products.push(id);
                localStorage.compare = JSON.stringify(products);
                this.$notify({
                    title: 'Амжилттай',
                    message: `Бүтээгдэхүүн нэмэгдлээ`,
                    type: 'success'
                });
            }
        },
        addFavourite(value) {
            const token = localStorage.getItem('token');
            if(token) {
                var rts = this;
                rts.$axios({
                    method: 'POST',
                    url: rts.$appUrl + '/api/product/add-favourite-product',
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    data: {
                        id: value
                    }
                }).then(data => {
                    if(data.data.result == 'success') {
                        this.$notify({
                            title: 'Амжилттай',
                            message: `Бүтээгдэхүүн хадгалагдлаа`,
                            type: 'success'
                        });
                    } else {
                        this.$notify({
                            title: 'Амжилтгүй',
                            message: `5-аас дээш бүтээгдэхүүн хадгалах боломжгүй`,
                            type: 'error'
                        });
                    }
                });
            } else {
                this.$notify({
                    title: 'Амжилтгүй',
                    message: `Нэвтэрсэн байх шаардлагатай`,
                    type: 'error'
                });
                this.$router.push('/login');
            }
        },
        addCart(value) {
            var products = [];
            let cart = JSON.parse(localStorage.getItem('cart'));
            if(cart != null && cart.length > 0) {
                let ex = cart.some(function(field) {
                    return field.id == value[1].id
                });
                if(ex) {

                    cart.forEach(element => {
                        if(element.id == value[1].id) {
                            // if(value[1].remain >= (element.qty + value[0])) {
                                
                            // } else {
                            //     this.$notify({
                            //         title: 'Амжилтгүй',
                            //         message: `Үлдэгдэл хүрэлцэхгүй байна`,
                            //         type: 'error'
                            //     });
                            // }

                            element.qty = element.qty + value[0];
                            this.$notify({
                                title: 'Амжилттай',
                                dangerouslyUseHTMLString: true,
                                message: `<strong>${element.model}</strong> бүтээгдэхүүн нэмэгдлээ`,
                                type: 'success'
                            });
                        }
                        products.push(element);
                    });
                    localStorage.cart = JSON.stringify(products);
                } else {
                    cart.forEach(element => {
                        products.push(element);
                    });
                    // if(value[1].remain >= value[0]) {
                        
                    // } else {
                    //     this.$notify({
                    //         title: 'Амжилтгүй',
                    //         message: `Үлдэгдэл хүрэлцэхгүй байна`,
                    //         type: 'error'
                    //     });
                    // }
                    var p = {id: value[1].id, name: value[1].name, price: value[1].sale_price, image: value[1].image, model: value[1].model, qty: value[0], color: value[1].color_name, discount: value[1].discount, bonus: value[1].bonus_percent};
                    products.push(p);
                    localStorage.cart = JSON.stringify(products);
                    this.$notify({
                        title: 'Амжилттай',
                        dangerouslyUseHTMLString: true,
                        message: `<strong>${value[1].model}</strong> бүтээгдэхүүн нэмэгдлээ`,
                        type: 'success'
                    });
                }
            } else {
                // if(value[1].remain >= value[0]) {
                    
                // } else {
                //     this.$notify({
                //         title: 'Амжилтгүй',
                //         message: `Үлдэгдэл хүрэлцэхгүй байна`,
                //         type: 'error'
                //     });
                // }
                var p = {id: value[1].id, name: value[1].name, price: value[1].sale_price, image: value[1].image, model: value[1].model, qty: value[0], color: value[1].color_name, discount: value[1].discount, bonus: value[1].bonus_percent};
                products.push(p);
                localStorage.cart = JSON.stringify(products);
                this.$notify({
                    title: 'Амжилттай',
                    dangerouslyUseHTMLString: true,
                    message: `<strong>${value[1].model}</strong> бүтээгдэхүүн нэмэгдлээ`,
                    type: 'success'
                });
            }
            this.calcCart();
        },
        removeCart(id) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.forEach((element, index) => {
                if(element.id == id) {
                    cart.splice(index, 1);
                }
            });
            localStorage.cart = JSON.stringify(cart);
            this.calcCart();
        },
        calcCart() {
            let cart = JSON.parse(localStorage.getItem('cart'));
            this.cart.product = cart;
            if(cart != null) {
                var t = 0; var a= 0;
                cart.forEach(element => {
                    t = t + element.qty;
                    if(element.discount > 0) {
                        a = a + element.price * ((100 - element.discount) / 100)
                    } else {
                        a = a + (element.price * element.qty);
                    }
                });
                if(t > 9) {
                    this.cart.total = '9+';
                } else {
                    this.cart.total = t;
                }
                this.cart.amount = Number(a).toLocaleString();
            } else {
                this.cart.total = 0;
                this.cart.amount = 0;
            }
        },
        filterRandProduct(id) {
            var result = [];
            this.random.product.forEach(element => {
                if(element.type == id) {
                    result.push(element);
                }
            });
            return result;
        },
        updateCountdown() {
            var now = new Date();
            var end = new Date(this.special.discount_end_time)
            
            if(end > now) {
                this.showCountdown = true;
                var sec = Math.abs(Math.round((end.getTime() - now.getTime()) / 1000));
                this.countdown.day = Math.floor(sec / 24 / 60 / 60);
                var hour = Math.floor((sec) - (this.countdown.day * 86400));
                this.countdown.hour = Math.floor(hour / 3600);
                var min = Math.floor( hour - (this.countdown.hour * 3600));
                var min2 = Math.floor(min / 60);
                if (min2 < 10) {
                    this.countdown.min = '0' + min2; 
                } else {
                    this.countdown.min = min2; 
                }
                var sec2 = sec % 60;
                if(sec2 < 10) {
                    this.countdown.sec = '0' + sec2;
                } else {
                    this.countdown.sec = sec2;
                }
            }
            
        },
        updateTimer() {
            if(this.eventIndex == this.events.length - 1) {
                this.eventIndex = 0;
            } else {
                this.eventIndex++;
            }
            this.hashtags = [];
            this.hashtags = this.events[this.eventIndex];
        },
        processTags () {
            var main = []; var sub = [];
            this.events.forEach((el, index) => {
                if((index + 1) % 3 != 0) {
                    sub.push(el);
                    if((index + 1) == this.events.length) {
                        main.push(sub);
                    }
                } else {
                    sub.push(el);
                    main.push(sub);
                    sub = [];
                }
            });

            this.events = [];
            this.events = main;
            this.updateTimer();
        },
        filterSub(id) {
            var cats = [];
            this.categories.sub.forEach(element => {
                if(element.categoryID == id) {
                    cats.push(element);
                }
            });
            return cats;
        },
        getInfo() {
            this.fullscreenLoading = true;
            var rts = this;
            rts.$axios({
                method: 'POST',
                url: rts.$appUrl + '/api/home/home-page',
                headers: {}
            }).then(function(data) {
                rts.homeBanner.list = data.data.homeBanner;  
                rts.categories.sub = data.data.subCategory;  
                rts.categories.main = data.data.category;  
                rts.categories.quick = data.data.quickCategory;  
                rts.featured = data.data.featuredProduct;  
                rts.discount = data.data.discountProduct;  
                rts.topRated = data.data.topRatedProduct;  
                rts.random.category = data.data.randomCategory;  
                rts.random.product = data.data.random;  
                rts.top.brand = data.data.topBrand;  
                rts.top.product = data.data.topProduct; 
                rts.banners = data.data.banners; 
                rts.events = data.data.events;
                rts.fullscreenLoading = false;
                data.data.specialProduct.length > 0 ? rts.special = data.data.specialProduct[0] : rts.special = '';
                countdown = setInterval(rts.updateCountdown, 1000);
                rts.processTags();
                timer = setInterval(rts.updateTimer, 5000)
            }).catch(error => {
                console.log(error);
            })
        },  
        getJquery() {
            $('.js-mega-menu').HSMegaMenu({
                    event: 'hover',
                    direction: 'horizontal',
                    pageContainer: $('.container'),
                    breakpoint: 767.98,
                    hideTimeOut: 0
            });
            $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
            $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
        }
    }
}
</script>
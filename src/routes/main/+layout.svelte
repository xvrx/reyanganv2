
<script>
// @ts-nocheck
// @ts-ignore-all
import {activeMenu} from '$lib/menu.js'
import { fade, fly } from 'svelte/transition';

import Logo from '$components/logo.svelte';
import LogoMinified from '$components/logoMinified.svelte';
import FaBuffer  from 'svelte-icons/fa/FaBuffer.svelte'
import IoIosPeople from 'svelte-icons/io/IoIosPeople.svelte'
import FaSkullCrossbones from 'svelte-icons/fa/FaSkullCrossbones.svelte'


// pelayanan
// import GiDarkSquad from 'svelte-icons/gi/GiDarkSquad.svelte'
// overview
// import GiBroadheadArrow from 'svelte-icons/gi/GiBroadheadArrow.svelte'


// repositoru
import GiBrain from 'svelte-icons/gi/GiBrain.svelte'

// overview
// import GiTargetShot from 'svelte-icons/gi/GiTargetShot.svelte'
import GiCrossedAxes from 'svelte-icons/gi/GiCrossedAxes.svelte'
// import GiPiercingSword from 'svelte-icons/gi/GiPiercingSword.svelte'

// import FaSignOutAlt from 'svelte-icons/fa/FaSignOutAlt.svelte'
// import MdAccountCircle from 'svelte-icons/md/MdAccountCircle.svelte'
// import GoGraph from 'svelte-icons/go/GoGraph.svelte'
// import FaStackOverflow from 'svelte-icons/fa/FaStackOverflow.svelte'

// kpdl
// import GiDna2 from 'svelte-icons/gi/GiDna2.svelte'
// import GiQuicksand from 'svelte-icons/gi/GiQuicksand.svelte'
import GiRadarSweep from 'svelte-icons/gi/GiRadarSweep.svelte'

// account
import GiRobotHelmet from 'svelte-icons/gi/GiRobotHelmet.svelte'
// import GiSpartanHelmet from 'svelte-icons/gi/GiSpartanHelmet.svelte'
// import GiDaemonSkull from 'svelte-icons/gi/GiDaemonSkull.svelte'
// import GiMuscleUp from 'svelte-icons/gi/GiMuscleUp.svelte'

// log out
import GiRun from 'svelte-icons/gi/GiRun.svelte'

let windowWidth;

// console.log('active menu', $activeMenu)
const currentEndpoint = window.location.href.split("/").slice(-1)[0]

import { mainMenu } from '$lib/pelayanan.js';
function clickLogo() {
  console.log($mainMenu)
}


switch (currentEndpoint) {
  case 'pelayanan':
    activeMenu.set(0)
    break;
  case 'overview':
    activeMenu.set(1)
    break;
  case 'deadlines':
    activeMenu.set(2)
    break;
  case 'repository':
    activeMenu.set(3)
    break;
  case 'kpdl':
    activeMenu.set(4)
    break;
  case 'main':
    activeMenu.set(null)
    break;
  default:
    break;
}

export let data;

</script>

<svelte:window 
	bind:innerWidth={windowWidth}
  />

<div class="outer-container">
  <div class="inner-container">
        <div class="burger-menu">
            <div class="burger-wrapper">
              <FaBuffer/>
            </div>
            <div class="logo-wrapper">
                <Logo />
            </div>
        
        </div>
        <div class="nav-container">

               <div class="nav-wrapper">

                    <div v class="main-menu">

                      <!-- svelte-ignore a11y-click-events-have-key-events -->
                      <!-- svelte-ignore a11y-no-static-element-interactions -->
                      <!-- <div class="logo-extended" on:click={() => console.log(window.innerWidth)}> -->
                        {#if windowWidth < 1250}
                          <div class="logo-minified">
                            <LogoMinified width="40px" color ="#3a4353"/>
                          </div>
                        {:else}
                        <!-- <Logo width="100px"/> -->
                          <div on:click={clickLogo} class="logo-extended">
                            <Logo width="135px" color="#3a4353"/>
                          </div>
                        {/if}
                      <!-- </div> -->

                          <ul class="icon-group">
                            <a title="Pelayanan" href="/main/pelayanan" on:click={() => activeMenu.set(0)} class={$activeMenu === 0 ? "main-menu-icons menu-active" : "main-menu-icons"}><span class="account-icons"><IoIosPeople/></span><li class="icon-desc">Pelayanan</li></a>
                            <a title="Overview" href="/main/overview" on:click={() => activeMenu.set(1)} class={$activeMenu === 1 ? "main-menu-icons menu-active" : "main-menu-icons"}><span class="account-icons"><GiCrossedAxes/></span><li class="icon-desc">Overview</li></a>
                            <a title="Deadlines" href="/main/deadlines" on:click={() => activeMenu.set(2)} class={$activeMenu === 2 ? "main-menu-icons menu-active" : "main-menu-icons"}><span class="account-icons"><FaSkullCrossbones/></span><li class="icon-desc">Deadlines</li></a>
                            <a title="Repository" href="/main/repository" on:click={() => activeMenu.set(3)} class={$activeMenu === 3 ? "main-menu-icons menu-active" : "main-menu-icons"}><span class="account-icons"><GiBrain/></span><li class="icon-desc">Repository</li></a>
                            <a title="KPDL" href="/main/kpdl" on:click={() => activeMenu.set(4)} class={$activeMenu === 4 ? "main-menu-icons menu-active" : "main-menu-icons"}><span class="account-icons"><GiRadarSweep/></span><li class="icon-desc">KPDL</li></a>
                          </ul>
                      </div>

                      <div class="account-menu">

                          <div class="account-info">
                            <span class="account-icons"><GiRobotHelmet /></span>
                            <span class="icon-desc">Account</span>
                          </div>

                          <div class="log-out">
                            <span class="account-icons"><GiRun/></span>
                            <span class="icon-desc">Log Out</span>
                          </div>

                      </div>
               </div>
        </div>

       
        <div 
       
        class="main-content-container">
        {#key data.url}
            <div 
            in:fly={{ y: 200, duration: 500, delay:500 }} 
            out:fly={{ y: -200, duration: 500 }}
            class="inner-main-content-container">

              <slot />

            </div>
            <!-- S L O T -->
            {/key}

        </div>
      
        
  </div>
</div>



<style> 
/* <!------------------------ --> */

.outer-container{
    width: 100%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
}

.inner-container{
   transition: all 0.5s ease-in-out;
    transform-origin: top;
    min-width: 99%;
    width: 99%;
    min-height: 583px;
    height: 98%;
    display: flex;
    justify-content: center;
}

.nav-container{
  transition: all 0.15s ease-in-out;
  /* max-width: 11em;
  width: 20%; */
  /* border: 2px solid cyan; */
  background-color: var(--white);
  border-radius: 10px;
  margin-right: 10px;
}

.burger-menu{
  transition: all 0.5s ease-in-out;
  scale: 0;
  opacity: 0;
  flex: 0;
  width: 0;
}

.logo-wrapper {
    display: none;
}


.burger-wrapper{
    display: none;
  }


.main-content-container{
    max-width: 100%;
    width: 100%;
    min-width: 80%;
    /* border: 2px solid rgb(255, 187, 0); */
}

.inner-main-content-container {
  margin: 0;
  padding: 1px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
}



.account-menu{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}

.logo-extended{
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-top: 10px;
  margin-bottom: 25px;
}

.nav-wrapper {
  color: var(--grey-dark);
  font-family: 'quantico';
  margin: 1px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.account-info, .log-out {
  user-select: none;cursor: pointer;
  transition: all 0.25s ease-in-out;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  padding-left: 30px;
  
}

.icon-group{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  position: relative;
}

.icon-group::after {
  position: absolute;
  content: '';
  top: -10px;
  width: 100%;
  height: 1.5px;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(218,228,240,1) 32%, rgba(232,238,246,1) 72%, rgba(255,255,255,1) 100%);

}

.icon-desc{
  transition: all 0.25s ease-in-out;
  transform-origin: left;
  opacity: 1;
  text-overflow: clip;
}


.account-menu{
  margin-bottom: 10px;
}

.account-icons{
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.main-menu {
  width: 100%;
}

.main-menu-icons{
  all: unset;
  user-select: none;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  user-select: none;
  margin-top: 10px;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: start;
}

.main-menu-icons:hover,.account-info:hover, .log-out:hover {
  transition: none;
  background-color: #f0f8ff;
}
.main-menu-icons:active,.account-info:active, .log-out:active {
  transform: scale(0.95);
}

.menu-active{
  color: #2076ff;
    width: 100%;
    /* border-radius: 10px 0 0 10px; */
    background-color: #d5e7ff;
}

.menu-active:hover {
  background-color: #d5e7ff;
}

.menu-active:active{
  transform: scale(1);
}
.menu-active::after {
  position: absolute;
  content: '';
  border-radius: 5px 0 0 5px;
  right: -1px;
  width: 5px;
  height: 47px;
  background-color: var(--blue-semi);
}




/* ============== MINIMAL SCREEN ============================= */





@media only screen and (max-width: 1250px) {


.icon-desc{
  transform: scaleX(0);
  opacity: 0;
  width: 0px;
}

.account-icons{
  transition: all 0.25s ease-in-out;
  min-width: 30px;
  min-height: 30px;
  margin: 0;
}

/* .logo-extended{
  display: none;
  scale: 0;
} */

.account-menu{
  margin-bottom: 0px;
}
.nav-container {
  min-width: 3.5em;
  width: 7%;
}
.main-content-container{
  display: flex;
  max-width: 93%;
  width: 93%;
  min-width: 80%;
}

.logo-minified{
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 10px;
}
.icon-group{
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-menu-icons {
  border-radius: 0;
  justify-content: center;
  margin-left: 0;
  padding-left: 0;
  padding: 10px;
  border-radius: 5px;
}

.account-menu{
  align-items: center;
  justify-content: center;
}


.account-info, .log-out {
    display: flex;
    margin-left: 0;
    margin-top: 10px;
    padding: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 48px;
}

.log-out {
  margin-bottom: 15px;
}



}









/* ================== MOBILE ========================= */


@media only screen and (max-width: 720px) {
  .inner-container {
    transition: all 0.5s ease-in-out;
    transform-origin: top;
    /* background-color: lightblue; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .nav-container {
    display: none;
  }


  .burger-menu{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    opacity: 1;
    scale: 1;
  }

  .burger-wrapper{
    display: flex;
    font-size: 12px;
    flex: 0.1;
    min-width: 45px;
    min-height: 45px;
    margin: 10px;
  }

  .logo-wrapper {
    display: flex;
    min-width: 120px;
    min-height: auto;
    height: auto;
    justify-content: end;
    width: 143px;
}

  /* .nav-container.show{
    flex: 0;
    position: absolute;
  } */
  
  .main-content-container{
    /* display: flex; */
    margin-top: 10px;
    max-width: 100%;
    width: 100%;
    height: 100%;
}

}









</style>





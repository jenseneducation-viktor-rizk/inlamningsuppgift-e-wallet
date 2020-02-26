<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro:600,700&display=swap);
body {
  display: block;
  margin: 0;
}
#app {
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: PT Mono, monospace;
  padding: 1rem;
  height: 100vh;
  max-width: 24rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

h1, h2, h3 {
  font-family: Source Sans Pro,sans-serif;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
a.cta {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: .125rem solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: .5rem;
  margin: 2rem 0;
  &:hover {
    background: #000;
    color: #ddd;
    cursor: pointer;
  }
}

.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: .6rem;
  background: #eee;
  padding: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
  box-shadow: 0 0 0.5rem rgba(0,0,0,.4);
  display: grid;
  gap: .5rem 0;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0,0%,100%,.4);
  header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    grid-column: auto/span 2;
    grid-row: auto/span 2;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  section.number {
    font-size: 1.6rem;
    letter-spacing: .05rem;
    padding: .5rem 0 0;
    text-transform: uppercase;
  }
  section.info, section.number {
    grid-column: auto/span 2;
    grid-row: auto/span 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  section.info aside.holder {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  section aside.valid span, section aside.valid p {
    text-align: right;
  }
  section aside span {
    display: block;
    text-transform: uppercase;
    font-size: .7rem;
    margin: 0 0 .25rem;
  }
  section aside p {
    display: block;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
  
}

.top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-transform: uppercase;
h1, p {
    text-align: center;
    margin: 0;
  } 
p {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: .8rem;
    font-weight: 600;
    color: rgba(0,0,0,.4);
    padding: .25rem;
  }
  h1 {
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
    line-height: 2rem;
    font-size: 2rem;
    padding: 1.5rem 0;
  }
}
.card-stack {
    margin: 8rem 0 12rem;
    display: grid;
    grid-auto-rows: 7rem;
    
    .card {
      transform: scale(1);
      transition: ease-out 0.5s;
      overflow: hidden;

      &:hover {
      cursor: pointer;
      margin-bottom: 30px;
      transform: translateY(-6rem);
  }
    }
    
}

//CARD FORM
.card-form {
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
  input, select {
    border: 1px solid #000;
    border-radius: .25rem;
    padding: .5rem;
    height: 2.6rem;
    margin: 0 0 .8rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 1rem;
    width: 100%;
  }
  label {
    padding: .25rem 0;
    font-size: .7rem;
    text-transform: uppercase;
  }
}

.col-1 {
  grid-column: auto/span 1;
}
.col-2 {
  grid-column: auto/span 2;
}

// CARD CLASSES
.bitcoin {
    background: linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;
    color: #222;
}
.blockchain {
    background: linear-gradient(248.52deg,rgba(0,0,0,.15) 1.49%,transparent),#8b58f9;
    color: #fff;
}
.ninja {
    background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;
    color: #fff;
}
.evil {
    background: linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;
    color: #fff;
}
.blank {
    background: linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)),#d0d0d0;
}
</style>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">QR Generator</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <router-link tag="li" to="/dashboard" class="nav-item" activeClass="active"><a class="nav-link">Dashboard</a></router-link>
        <router-link tag="li" to="/history" class="nav-item" activeClass="active"><a class="nav-link">History</a></router-link>
    </ul>
  </div>
</nav>
</template>

<template>
	<nav class="navbar navbar-expand-lg navbar-light fixed-top">
	  <a class="navbar-brand" href="/#/">RCOS</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item">
          <a class="nav-link" href="/#/projects">Projects</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/#/users">Developers</a>
        </li>

        <li>
          <a class="nav-link" href="/#/blogs">Blog</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/#/achievements">Achievements</a>
        </li>

        <li>
          <a class="nav-link" href="/#/attend">Attend</a>
        </li>

        <b-nav-item-dropdown text="Mentor" right>
          <b-dropdown-item href="/#/mentor/verify">Verify</b-dropdown-item>
          <b-dropdown-item href="/#/mentor/small_group">Small Group</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Admin" right>
          <b-dropdown-item href="/#/admin/attendance">Attendance</b-dropdown-item>
          <b-dropdown-item href="/#/admin/users">Users</b-dropdown-item>
          <b-dropdown-item href="/#/admin/settings">Settings</b-dropdown-item>
        </b-nav-item-dropdown>

	    </ul>

	    <ul class="navbar-nav ml-auto">
	      <li class="nav-item">
	        <a class="nav-link" href="/#/auth/register">Register</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="/#/auth/login">Login</a>
	      </li>
	    </ul>
	  </div>
	</nav>
</template>

<script>
// TODO - this should be split into a series of smaller components
export default {
  name: 'Navbar'
}
</script>

<style type="text/css">
  .navbar {
    background-color: #f3f3f3;
  }
</style>

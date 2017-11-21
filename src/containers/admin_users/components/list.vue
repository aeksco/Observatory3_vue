
<template>
  <div class="table-responsive">
    <table class="table table-hover text-center table-striped table-bordered">
      <thead>
        <tr>
            <td colspan="3">Info</td>
            <td colspan="2">Full Group</td>
            <td colspan="2">Small Group</td>
            <td colspan="2">Contributions</td>
            <td colspan="2">Edit</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>Git</td>
            <td>User Role</td>
            <td title="Full Group Attendance"><i class="fa fa-calendar-check-o"></i></td>
            <td title="Bonus Full Group Attendance">+</td>
            <td title="Small Group Attendance"><i class="fa fa-calendar-check-o"></i></td>
            <td title="Bonus Small Group Attendance">+</td>
            <td>Events</td>
            <td>Commits</td>
            <td>Active</td>
            <td>Attendance</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Aaron Gunderson</th>
          <td>Pic</td>
          <td>
            <select class="form-control">
              <option>User</option>
              <option>Mentor</option>
              <option>Admin</option>
            </select>
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td></td>
          <td><i class="fa fa-check-square" aria-hidden="true"></i></td>
          <td><i class="fa fa-calendar"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

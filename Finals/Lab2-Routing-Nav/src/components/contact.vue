<template>

<div class="container">
    <h1>Contact Me</h1>
<form action="action_page.php">

    <label for="fname">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Your Email..">

    <label for="gender">Gender</label>
    <select id="gender" name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
    </select>

    <label for="subject">Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">

</form>
</div>
</template>

<script>
export default {
name: 'contact',
data () {
    return {
    title: 'Contact'
    }
}
}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
width: 100%;
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
margin-top: 6px;
margin-bottom: 16px;
resize: vertical;
}

input[type=submit] {
background-color: #04AA6D;
color: white;
padding: 12px 20px;
border: none;
border-radius: 4px;
cursor: pointer;
}

input[type=submit]:hover {
background-color: #45a049;
}

.container {
border-radius: 5px;
background-color: #f2f2f2;
padding: 20px;
}
</style>
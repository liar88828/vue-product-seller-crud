<template>
  <ErrorNotFound
    :title="'Data Profile Marker is not Found'"
    :description="'Please Create Your Market Profile First'"
    :code="404"
    :linkTitle="'Register'"
    link="/market/profile/create"
  />
</template>

<script setup lang="ts"></script>

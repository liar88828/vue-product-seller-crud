<template>
  <tr>
    <td colspan="3">
      <Card>
        <CardBody>
          <button class="btn btn-primary btn-outline">
            {{ text }}
          </button>
        </CardBody>
      </Card>
    </td>
  </tr>
</template>
<script lang="ts" setup>
defineProps<{
  span: number
  text: string
}>()
</script>

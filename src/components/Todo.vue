<template>
  <li class="d-flex align-items-center list-group-item">
    <div :class="{completed}" @click="$emit('on-toggle')" class="btn text-left flex-grow-1">
      {{task}}
    </div>
    <button @click="$emit('on-delete')" class="btn btn-outline-danger">
      <i class="fa fa-trash-alt"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    task: String,
    completed: Boolean
  }
};
</script>


<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
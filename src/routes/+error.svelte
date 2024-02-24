<script>
  import "../app.css"
  import { page } from "$app/stores"
</script>

<div class="hero min-h-[100vh] bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">Oops, something went wrong...</h1>
      {#if $page?.error}
        <p class="py-6 text-2xl">Error Message: {$page.error.message}</p>
        {#if $page.error.stack}
          <pre>{$page.error.stack}</pre>
        {/if}
      {:else}
        <p class="py-6 text-2xl">An unknown error occurred.</p>
      {/if}
      <div>
        <a href="/" class="btn btn-primary btn-wide">Return Home</a>
      </div>
    </div>
  </div>
</div>

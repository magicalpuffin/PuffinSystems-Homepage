<script lang="ts">
  import type { CardType } from "$lib/types/card";

  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import OpenInWindowIcon from "$lib/icons/OpenInWindowIcon.svelte";

  export let cardContent: CardType;
</script>

<div class="my-4 max-w-xl overflow-hidden rounded-xl border shadow-lg">
  <img class="h-48 w-full object-cover" src={cardContent.img_src} alt="" />
  <div class="px-6 py-4">
    <div class="mb-2 flex justify-between text-xl font-bold">
      <div>{cardContent.title}</div>
      <div class="flex">
        {#if cardContent.detail_link}
          <a
            href={cardContent.detail_link}
            class="rounded-full text-black hover:text-blue-600"
            ><OpenInWindowIcon /></a
          >
        {/if}
        {#if cardContent.github_link}
          <a
            href={cardContent.github_link}
            class="rounded-full text-black hover:text-blue-600"
            ><GithubIcon /></a
          >
        {/if}
      </div>
    </div>
    <article class="prose">
      {@html cardContent.body_html}
    </article>
  </div>
</div>

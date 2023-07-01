import type { PageLoad } from "./$types";
import type { CardDataType } from "$lib/types/card";
import type { CardType } from "$lib/types/card";

import { fetchMarkdown } from "$lib/utils/fetchMarkdown";
import { notebookCards } from "$lib/data/cardData";

export const load = (async ({ fetch }) => {
  let cards: CardType[] = notebookCards.map((card) => {
    return {
      title: card.title,
      body_html: fetchMarkdown(card.body_url, fetch),
      img_src: card.img_src,
      github_link: card.github_link,
      detail_link: card.detail_link,
    };
  });

  // let tempText: string;

  // function renderCard(card: CardDataType) {
  //   let newCard: CardType = {
  //     title: card.title,
  //     body_html: fetchMarkdown(card.body_url, fetch),
  //     img_src: card.img_src,
  //     github_link: card.github_link,
  //     detail_link: card.detail_link,
  //   };

  //   return newCard;
  // }

  // tempText = await fetchMarkdown(
  //   "/md_content/card_body/tinywars_stats.md",
  //   fetch
  // );

  return { cards };
}) satisfies PageLoad;
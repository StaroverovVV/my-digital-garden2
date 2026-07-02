import { quartzConfigurationSchema } from "@jacky/quartz/configurationSchema";

/** Configuration options for Quartz.
 * See the Documentation page for detailed explanations.
 * https://quartz.izumi.xyz/configuration.html
 */
const config: Partial<typeof quartzConfigurationSchema> = {
  configuration: {
    pageCrawl: true,
    scheme: "system",
    title: "Цифровой Сад Славы",
    description: "Системное мышление, корпоративная антропология и личная стратегия",
  },
  plugins: {
    components: {
      PageTitle: {
        template: "<h1 class=\"title\">{{page.title}}</h1>",
        name: "Page Title",
        interstitial: true,
        appendCrumbs: true,
      },
      PageHeader: {
        template: "<header><nav>{{TOC}}</nav></header>",
        name: "Page Header",
      },
      // ... basic components
    },
    filters: {
      sitemap: {
        name: "Sitemap",
        excerpt: true,
        maxCrawlDepth: 2,
      },
    },
    processors: {
      frontmatter: {
        name: "Frontmatter",
        title: "title",
        date: "date",
        tags: "tags",
      },
    },
  },
};

export default config;

<script>
import Container from '@/components/Container.vue'
import Title from '@/components/Title.vue'
import Repos from '@/components/repos/Repos.vue'
import Repo from '@/components/repos/Repo.vue'
import SkeletonRepo from '@/components/skeleton/Repo.vue'

export default {
  components: {
    Container,
    Title,
    Repos,
    Repo,
    SkeletonRepo
  },
  data () {
    return {
      repos: []
    }
  },
  async mounted() {
    this.repos = await fetch('https://gh-pinned-repos.solak.workers.dev/')
      .then(res => res.json());
  }
}
</script>

<template>
  <section>
    <Container>
      <Title title="GitHub Repos" />
      <Repos>
        <Repo
          v-for="repo in repos"
          :owner="repo.owner"
          :repo="repo.repo"
          :link="repo.link"
          :description="repo.description"
          :color="repo.languageColor"
          :language="repo.language"
          :stars="repo.stars"
        />

        <SkeletonRepo v-if="!repos.length" />
        <SkeletonRepo v-if="!repos.length" />
        <SkeletonRepo v-if="!repos.length" />
        <SkeletonRepo v-if="!repos.length" />
      </Repos>
    </Container>
  </section>
</template>

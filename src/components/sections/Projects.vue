<script>
import Container from '@/components/Container.vue'
import Title from '@/components/Title.vue'
import Projects from '@/components/projects/Projects.vue'
import Project from '@/components/projects/Project.vue'

export default {
  components: {
    Container,
    Title,
    Projects,
    Project
  },
  data() {
    return {
      projects: [
        {
          name: 'sunucum.cloud',
          url: 'https://sunucum.cloud',
          status: 'active',
          description: 'My workspace server running on CentOS 7.',
        },
        {
          name: 'cevir.in',
          url: 'https://cevir.in',
          status: 'active',
          description: 'It is a simple video downloader from various sites.',
        },
        {
          name: 'solak.dev',
          url: 'https://solak.dev',
          status: 'active',
          description: 'Domain that I serve my example projects under.',
        },
        {
          name: 'enes.im',
          url: 'https://enes.im',
          status: 'active',
          description: 'My link alias service.',
        }
      ]
    }
  }
}
</script>

<template>
  <section>
    <Container>
      <Title title="Projects" />
      <Projects>
        <Project
          v-for="project in projects"
          :name="project.name"
          :url="project.url"
          :status="project.status"
          :description="project.description"
        />
      </Projects>
    </Container>
  </section>
</template>

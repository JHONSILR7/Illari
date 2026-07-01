import { positions, type Position } from '@/data/positions'
import { candidates, type Candidate } from '@/data/candidates'
import { proposals, type Proposal } from '@/data/proposals'
import { getSiteContentArray } from '@/data/site-content'

export const api = {
  getPositions: () => Promise.resolve<Position[]>(positions),

  getCandidates: (params?: { position_id?: string; position_slug?: string }) => {
    let result = [...candidates]
    if (params?.position_slug) {
      result = result.filter(c => c.position?.slug === params.position_slug)
    }
    if (params?.position_id) {
      result = result.filter(c => c.position_id === params.position_id)
    }
    return Promise.resolve<Candidate[]>(result)
  },

  getCandidate: (id: string) => {
    const c = candidates.find(c => c.id === id)
    return Promise.resolve<Candidate | null>(c || null)
  },

  getProposals: () => Promise.resolve<Proposal[]>(proposals),

  getSiteContent: () => Promise.resolve(getSiteContentArray()),
}

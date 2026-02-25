'use client'

import Accordion from '@/components/Accordion'

export default function ResearchPage() {
  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <div className="container">
        <p style={{
          fontSize: '17px',
          color: 'var(--color-text-secondary)',
          marginBottom: '48px',
          lineHeight: 1.7,
        }}>
          Below is a selection of my research organized by topic.
        </p>

        <div style={{ borderTop: '1px solid var(--color-border)' }}>
          <Accordion title="Technology Governance">
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              Research on platform regulation, AI governance, data policy, and the role of technology companies in shaping public discourse and democratic processes.
            </p>
          </Accordion>

          <Accordion title="Journalism and Media Policy">
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              Work examining the economics of digital journalism, news sustainability, media regulation, and the policy frameworks needed to support a healthy information ecosystem.
            </p>
          </Accordion>

          <Accordion title="Media Ecosystem Analysis">
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              Data-driven research through the Media Ecosystem Observatory, tracking misinformation, media consumption patterns, and the health of Canada&rsquo;s information environment.
            </p>
          </Accordion>

          <Accordion title="Human Security">
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              Earlier research on the intersection of technology, conflict, and human security, including the role of digital tools in humanitarian response and conflict monitoring.
            </p>
          </Accordion>

          <Accordion title="On the Bombing of Cambodia">
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              Doctoral research using geospatial data to map the full extent of the American bombing campaign in Cambodia, revealing previously unknown patterns of violence.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

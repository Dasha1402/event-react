import { teamData } from '../data/team';

export function TeamSection() {
    return (
        <section id="team" className="section container">
            <h2 className="section-title">Команда</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {teamData.map((member, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '15px', overflow: 'hidden', textAlign: 'center', paddingBottom: '20px' }}>
                        <img src={member.img} alt={member.name} style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '15px' }} />
                        <h3 style={{ fontFamily: 'Playfair Display', fontSize: '20px', marginBottom: '5px' }}>{member.name}</h3>
                        <p style={{ color: '#a3c1ad', fontSize: '14px', marginBottom: '15px' }}>{member.role}</p>
                        <p style={{ fontSize: '14px', color: '#ccc', padding: '0 15px', marginBottom: '15px' }}>{member.desc}</p>
                        <p style={{ fontStyle: 'italic', fontSize: '13px', color: '#999', padding: '0 15px' }}>"{member.quote}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
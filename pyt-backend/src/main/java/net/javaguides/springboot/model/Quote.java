package net.javaguides.springboot.model;

import javax.persistence.*;

@Entity
@Table(name = "quotes")
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "email_id")
    private String emailId;

    @Column(name = "subject")
    private String subject;

    @Column(name = "query")
    private String query;

    public Quote() {
    }

    public Quote(String emailId, String subject, String query) {
        this.emailId = emailId;
        this.subject = subject;
        this.query = query;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }
}

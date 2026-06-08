// Last updated: 6/8/2026, 11:51:21 AM
function numUniqueEmails(emails: string[]): number {
    const uniqueEmails = new Set(emails.map(e => {
        const [rawLocalName, domainName] = e.split('@');
        const beforePlus = rawLocalName.split('+')[0];
        const cleanLocal = beforePlus.replace(/\./g, '');
        return `${cleanLocal}@${domainName}`; 
    }));
    return uniqueEmails.size;
};
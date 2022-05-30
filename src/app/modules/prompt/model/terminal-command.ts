export interface TerminalCommand {
    command: string;
    hidePrompt?: boolean;
    values: string[];
}